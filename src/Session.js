import React, { Component } from 'react'

class Session extends Component {
  render () {
    const { props } = this

    const style = { ...props.style, backgroundColor: 'cyan', width: 200 }

    return (
      <div style={style}>{props.children}</div>
    )
  }
}

export default Session