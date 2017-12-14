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
          props.room.sessionPositions.map((isSession, index) => {
            const key = `${props.room.id}-${index}`
            return !isSession
            ? <DropDiv key={key} startTime={index} />
            : (
              <Session
                key={key}
                style={divStyle}
                onClick={e => props.onHandleDrop(props.room.id, index - 1)}
              >
                {`${props.room.name} Session`}
              </Session>
            )
          })
        }
      </div>
    )
  }
}

export default GridRow
