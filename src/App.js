import React, { Component, Fragment } from 'react'
import NavBar from './components/navbar.jsx'
import Counters from './components/counters.jsx';
class App extends Component{
  render(){
  return (
    <React.Fragment>
      <NavBar/>
      <main className='container'>
        <Counters/>
      </main>
      </React.Fragment>
  );
}
}

export default App;
