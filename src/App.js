import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import GridRow from './GridRow'
import { data, dataLarge } from './utils'
import findIndex from 'lodash/findIndex'

class App extends Component {
  constructor (props) {
    super(props)

    this.onHandleDrop = this.onHandleDrop.bind(this)
    this.toggle = this.toggle.bind(this)

    this.state = {
      useDataLarge: false
    }
  }

  onHandleDrop (roomId, startTime) {
    const { state } = this

    const roomIndex = findIndex(state.rooms, n => n.id === roomId)

    if (roomIndex !== -1) {
      const room = state.rooms[roomIndex]
      room.sessionPositions = [...Array(room.sessionPositions.length)].map(n => false)

      room.sessionPositions = [
        ...room.sessionPositions.slice(0, startTime),
        true,
        ...room.sessionPositions.slice(startTime + 1)
      ]

      const rooms = [ ...state.rooms.slice(0, roomIndex), room, ...state.rooms.slice(roomIndex + 1) ]
      this.setState({ rooms })
    }
  }

  toggle () {
    this.setState(prevState => {
      return {
        useDataLarge: !prevState.useDataLarge
      }
    })
  }

  render () {
    const { state } = this

    const dataToUse = state.useDataLarge ? [ ...dataLarge ] : [ ...data ]

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <div style={{ marginTop: 50 }}><button onClick={this.toggle}>{state.useDataLarge ? 'use small data' : 'use large data'}</button></div>
        <div style={{ padding: 10, marginTop: 10 }}>
          {
            dataToUse.map((room, index) => <GridRow key={room.id} room={room} roomIndex={index} onHandleDrop={() => {}} />)
          }
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App)
