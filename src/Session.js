import React, { Component } from 'react'
import { ITEM_TYPES } from './constants'
import { DragSource } from 'react-dnd'

const sessionSource = {
  beginDrag (props) {
    return {}
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Session extends Component {
  render () {
    const { props } = this

    const style = { ...props.style, backgroundColor: 'cyan', width: 200 }

    return props.connectDragSource(
      <div onClick={props.onClick} style={style}>{props.children}</div>
    )
  }
}

export default DragSource(ITEM_TYPES.SESSION, sessionSource, collect)(Session)
