import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ColorList from './Colorlist';
import Color from './Color';
import AddColorForm from './AddColorForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
    this.addColor = this.addColor.bind(this);
  }

  addColor(newColor) {
    this.setState(prevState => ({
      colors: [newColor, ...prevState.colors]
    }));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={this.state.colors} />
          </Route>
          <Route path="/colors/:color" render={(routerProps) => <Color {...routerProps} colors={this.state.colors} />} />
          <Route path="/colors/new">
            <AddColorForm addColor={this.addColor} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </div>
    );
  }
}

export default App;