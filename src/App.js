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
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styels from'./appStyles.module.css'
function App () {
    return (
      <div className="App">
        <h1 className='error'>eroor</h1>
        <h1 className= {styels.success}>success</h1>
        {/* <EventBind></EventBind> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
        {/* <Stylesheet primary = {true}/> */}
        <Inline/>
      </div>
    );
}

export default App;
