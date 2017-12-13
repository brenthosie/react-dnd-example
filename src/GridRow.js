import React, { Component } from 'react'

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

const Session = props => {
  const style = { ...divStyle, backgroundColor: 'cyan', width: 200 }
  return <div style={style}>{props.children}</div>
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
        <DropDiv startTime={0} />
        <DropDiv startTime={1} />
        <DropDiv startTime={2} />
        <Session>{`session ${props.index}`}</Session>
        <DropDiv startTime={3} />
        <DropDiv startTime={4} />
      </div>
    )
  }
}

export default GridRow
