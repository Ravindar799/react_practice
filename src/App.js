import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css'
import EvnetBind from './components/EventBind';
import Counter from './components/Counter';
import Functionclick from './components/click';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
function App () {
    return (
      <div className="App">
        {/* <EventBind></EventBind> */}
        {/* <ParentComponent/> */}
        <UserGreeting/>
      </div>
    );
}

export default App;
