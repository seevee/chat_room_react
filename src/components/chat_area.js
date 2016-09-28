import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewChatForm from './new_chat_form'

class ChatArea extends Component {
  renderChats() {
    return this.props.chats.chats.map((chat) => {
      return (
        <li key={chat.id} className='chat'>
          <span className='chat-user'>{chat.user}</span>
          <span className='chat-text'>{chat.text}</span>
        </li>
      )
    })
  }

  render() {
    return (
      <div className='chat-area'>
        <ul className='chats'>
          {this.renderChats()}
        </ul>
        <NewChatForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { chats: state.chats }
}

export default connect(mapStateToProps)(ChatArea)
