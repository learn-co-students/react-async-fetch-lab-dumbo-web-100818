// create your App component here
import React from 'react'

class App extends React.Component{
  state ={
    people:[]
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(people => this.setState({
      people:people.people
    }))
  }
  render(){
    console.log(this.state.people)
    return(
      <h1>hey</h1>
    )
  }
}

export default App
