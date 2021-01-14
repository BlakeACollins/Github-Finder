
import React, { Component, Fragment }from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Search from './components/layouts/users/Search';
import Users from './components/layouts/users/User';
import Alert from './components/layouts/Alert';
import About from './components/pages/About'

class App extends Component{
  state = {
    users: [],
    loading: false,
    alert: null
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };



// This code block will auto load 30 profiles from GitHub

// async componentDidMount(){
// this.setState({ loading: true});

//     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     this.setState({users: res.data, loading: false});
//   };

  //Search github
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading: false});
  }

  //Clear Users from search and current state.
  clearUsers = () => this.setState({ users: [], loading: false });

  //Alert if search bar is not filled out
  setAlert = (msg, type) => {
    this.setState({ alert: { msg,type }});
    setTimeout(() => this.setState({ alert: null}), 4000)
  };
  

  render() {

    const {users, loading} = this.state;
      
    return (
      <Router>
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Alert alert={this.state.alert} />
        <Switch>
          <Route
          exact
          path='/'
          render={props => (
            <Fragment>
              <Search 
                  searchUsers={this.searchUsers} 
                  clearUsers={this.clearUsers} 
                  showClear ={users.lenght > 0 ? true: false} 
                  setAlert={this.setAlert}
                />
              <Users 
                    loading={loading} 
                    users={users}/>
               
            </Fragment>
          )} />
          <Route exact path='/about' component={About} />
        </Switch>
       
      </div>
    </div>
    </Router>
    );
  }
}

export default App;
