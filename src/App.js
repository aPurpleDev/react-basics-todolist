import React from 'react';
import List from './Components/List/List'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      names: [],
      inputName: 'Ma valeur'
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      this.setState({
        names: res.data
      })
    })
  }

  deleteById = (id) => {
    let newNames = this.state.names.filter(element => element.id !== id);
    this.setState({
      names: newNames
    })
  };

  handleChange = (e) => {
    this.setState({
      inputName: e.target.value
    })
  };

  handleClick = () => {
    let newNames = this.state.names.concat({
      id: this.state.names.length + 1,
      name: this.state.inputName
    });

    this.setState({
      names: newNames
    })
  };

  render() {
    return (
        <div className="App">
          <h1>TodoList</h1>
          <header className="App-header">
            <List names={this.state.names} deleteById={this.deleteById}/>

            <input onChange={this.handleChange} value={this.state.inputName}/>
            <button onClick={this.handleClick}>Add</button>
          </header>
        </div>
    );
  }
}

export default App;
