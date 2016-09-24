import React, { Component } from 'react'
import Avatar from 'react-avatar'

export default class User extends Component {
  render() {
    return (
      <div className='user'>
        <div className='user-icon'>
          Indicator
        </div>
        <Avatar size='50' className='user-avatar'/>
        <div className='user-info'>
          <div className='user-name'>{this.props.user.username}</div>
          <div className='user-status'>{this.props.user.status}</div>
        </div>
      </div>
    )
  }
}
