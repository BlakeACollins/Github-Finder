
import React, { Component }from 'react'
import Navbar from './components/layouts/Navbar';
import './App.css';
import Search from './components/layouts/users/Search';
import axios from 'axios';
import Users from './components/layouts/users/User';

class App extends Component{
  state = {
    users: [],
    loading: false
  };

// async componentDidMount(){
// this.setState({ loading: true});

//     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     this.setState({users: res.data, loading: false});
//   };

  //Search github
  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading: false});
  }



  render() {
      
    return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Search searchUsers={this.searchUsers}/>
      <Users loading={this.state.loading} users={this.state.users}/>
      </div>
      
    </div>
  );
}
}

export default App;
