import React from 'react'

import './App.css'
import nodeImg from './assets/node-image.png'
import List from './components/List'

function App() {
  return <div>
    <h1>Hello</h1>
    <img src={nodeImg} alt="node image"/>
    <List />
  </div>
}

export default App
