import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewChatForm from './new_chat_form'

class ChatArea extends Component {
  renderChats() {
    //console.log('chatArea props: ', this.props)
    return this.props.chats.chats.map((chat) => {
      return (
        <li key={chat.id}>
          <span>{chat.user}</span>
          <span>{chat.text}</span>
        </li>
      )
    })
  }

  render() {
    return (
      <div className='chat-area'>
        <ul className='chats'>
          ChatArea
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
