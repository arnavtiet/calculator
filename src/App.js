
import './App.css';
import React from 'react'
import NAV from './NAV BAR/NAV';
import Button from './buttons/button';
import grid from './grid/grid';
import MyComponent from './grid/grid';

// import calc from 'calculator\public\calci.jpeg'

function App() {
  return (
    <>
    <div>
      <><NAV></NAV></>
    
      <MyComponent className="my-classname" input="Hello, World!" />
    </div>
    </>

   
    
  );
}

export default App;
