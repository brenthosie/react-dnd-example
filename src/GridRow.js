import React, { Component } from 'react'
import Session from './Session'
import { ITEM_TYPES } from './constants'
import { DropTarget } from 'react-dnd'

const divStyle = {
  borderStyle: 'solid',
  borderWidth: '0 1px 1px 0',
  borderColor: 'black',
  width: 50,
  height: 50
}

const dropTarget = {
  drop (props, monitor) {
    console.log(props)
    console.log(monitor)
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    dragStart: monitor.getInitialClientOffset(),
    currentOffset: monitor.getDifferenceFromInitialOffset()
  }
}

class DropDivInner extends Component {
  render () {
    const style = {...divStyle}
    if (this.props.isOver) {
      style.backgroundColor = 'green'
    }
    return this.props.connectDropTarget(
      <div style={style} />
    )
  }
}

const DropDiv = DropTarget(ITEM_TYPES.SESSION, dropTarget, collect)(DropDivInner)

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
            ? <DropDiv key={key} startTime={index} roomId={props.room.id} roomArrayIndex={props.roomIndex} />
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
