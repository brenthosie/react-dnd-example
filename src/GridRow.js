import React, { Component } from 'react'
import Session from './Session'

const divStyle = {
  borderStyle: 'solid',
  borderWidth: '0 1px 1px 0',
  borderColor: 'black',
  width: 50,
  height: 50
}
const DropDiv = props => {
  return (
    <div style={divStyle} />
  )
}

class GridRow extends Component {
  render () {
    const { props } = this

    const style = {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: props.index === 0 ? '1px 0 0 1px' : '0 0 0 1px',
      borderStyle: 'solid',
      borderColor: 'black'
    }

    return (
      <div className='grid-row' style={style}>
        {
          props.room.sessionPositions.map((isSession, index) => !isSession
            ? <DropDiv startTime={index} />
            : <Session style={divStyle}>{`${props.room.name} Session`}</Session>
          )
        }
      </div>
    )
  }
}

export default GridRow
