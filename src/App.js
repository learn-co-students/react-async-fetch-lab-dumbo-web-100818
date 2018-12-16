// create your App component here
import React, { Component } from 'react';


class App extends Component {

  state= {
    people: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json =>
      this.setState({
        people: json.people
      })
    )
  }

  render() {
    let people = this.state.people.map(person => {
      return <h1> {person.name} </h1>
    })
    return (
      <div>
        {people}
      </div>
    );
  }

}

export default App;
