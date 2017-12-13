import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import GridRow from './GridRow'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
          {
            [...Array(10)].map((n, index) => <GridRow key={index} index={index} />)
          }
        </div>
      </div>
    )
  }
}

export default App
