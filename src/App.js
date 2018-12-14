// create your App component here
import React, { Component } from 'react';
import Button from './components/Button';
import ExampleComponent from './components/ExampleComponent';
import Greeting from './components/Greeting';

class App extends Component {

  state={
    astronauts: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(astros=>{
      this.setState({astronauts: astros.people})
    })

  }



  render() {
    
    return (
      <div>
      <Button />
      <ExampleComponent/>
      <Greeting/>
      </div>
    );
  }

}

export default App;
