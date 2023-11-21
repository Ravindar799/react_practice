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
import Form from './components/Form';
import Practiceprops from './components/Practiceprops';
import DiscountPercentage from './components/DiscountPercentage';
import Listrendering from './components/Listrendering';
import LIfeCycleMethods from './components/LifeCycleMethods';
import Parent from './components/lifecycledemo/parent'
import RefsDemo from './refs/RefsDemo';
import context from './components/context/Context';
import {UserProvider }from'./components/context/Context'
import ComponentA from './components/context/ComponentA';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
function App () {
    return (
      <div className="App">
        {/* <h1 className='error'>eroor</h1> */}
        {/* <h1 className= {styels.success}>success</h1> */}
        {/* <EventBind></EventBind> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
        {/* <Stylesheet primary = {true}/> */}
        {/* <Inline/> */}
        {/* <Form/> */}
        {/* <Practiceprops/> */}
        {/* <DiscountPercentage temp = {22}/> */}
        {/* <DiscountPercentage temp = {20}/> */}
        {/* <DiscountPercentage temp = {5}/> */}
        {/* <Listrendering/> */}
        {/* <LIfeCycleMethods/> */}
        {/* <Parent /> */}
        {/* <Context/> */}
        {/* <UserProvider value= "ravindar">
          <ComponentA/>
        </UserProvider> */}
        <ClickCounter name = "rahul"/>
        <HoverCounter/>
     </div>
    );
}

export default App;
