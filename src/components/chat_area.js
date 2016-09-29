import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewChatForm from './new_chat_form'
import Chat from './chat'

class ChatArea extends Component {
  renderChats() {
    // Scroll to bottom
    let element = document.getElementsByClassName('chats')
    element.scrollTop = element.scrollHeight

    return this.props.chats.chats.map((chat) => {
      return <Chat chat={chat} />
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
