import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import GridRow from './GridRow'
import { data } from './utils'
import findIndex from 'lodash/findIndex'

class App extends Component {
  constructor (props) {
    super(props)

    this.onHandleDrop = this.onHandleDrop.bind(this)

    this.state = {
      rooms: data
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

  render () {
    const { state } = this

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
          {
            state.rooms.map(n => <GridRow key={n.id} room={n} onHandleDrop={this.onHandleDrop} />)
          }
        </div>
      </div>
    )
  }
}

export default App
