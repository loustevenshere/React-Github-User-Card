import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './Components/UserList';

class App extends React.Component {
  state = {
    gitUsers: []
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/loustevenshere')
    .then(res => {
      this.setState({
        gitUsers: res.data
      })
      console.log(this.state.gitUsers);
    })
    .catch(err => {
      console.log(err)
    })
    console.log(this.state.gitUsers.created_at)
  };


  

  render() {
    return (
      <div className="App">
      <h1>Welcome {this.state.gitUsers.login}</h1>
      <UserList gitUsers={this.state.gitUsers} />
      </div>
    );
  }
}

export default App;
