import React from 'react'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      spacePeople: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({spacePeople: data.people})
    })
  }

  // spacePeople = () => {
  // this.state.spacePeople.map(
  //     people => {
  //      return people.name
  //     }
  //     )
  // }

  render() {
    return (
      <div>
      {this.state.spacePeople.map(person => person.name)}
      </div>
      )
  }
}
