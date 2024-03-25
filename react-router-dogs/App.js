import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './Doglist';
import DogDetails from './DogDetails';

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  };

  render() {
    const { dogs } = this.props;
    return (
      <div>
        <Nav dogs={dogs} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} />
          </Route>
          <Route path="/dogs/:name" render={(routerProps) => <DogDetails {...routerProps} dogs={dogs} />} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

export default App;