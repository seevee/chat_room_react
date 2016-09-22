import React, { Component } from 'react'
import User from './user'

export default class UserTray extends Component {
  render() {
    return (
      <div>
        UserTray
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    )
  }
}
