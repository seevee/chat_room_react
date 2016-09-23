import React, { Component } from 'react'
import ChatArea from './chat_area'
import UserTray from './user_tray'

export default class App extends Component {
  render() {
    return (
      <div className='chat-room-app'>
        App
        <ChatArea />
        <UserTray />
      </div>
    )
  }
}
