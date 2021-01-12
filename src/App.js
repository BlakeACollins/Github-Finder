
import React from 'react'
import Navbar from './components/layouts/Navbar';
import './App.css';
import Users from './components/layouts/users/User'

class App extends React.Component{

  render() {
      
    return (
    <div className="App">
      <Navbar/>
      <div className='container'>
      <Users/>
      </div>
      
    </div>
  );
}
}

export default App;
