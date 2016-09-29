import React, { Component } from 'react'

export default class Chat extends Component {
  render() {
    return (
      <li key={this.props.chat.id} className='chat'>
        <span className='chat-user'>{this.props.chat.user}</span>
        <span className='chat-text'>{this.props.chat.text}</span>
      </li>
    )
  }
}
