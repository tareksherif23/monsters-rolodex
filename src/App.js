import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        res.json()
          .then(users => this.setState({ monsters: users }))
      })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <input type='search' placeholder='look for a Monster.. ' onChange={e => this.setState({ searchField: e.target.value })}></input>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
