import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './user'

class UserTray extends Component {
  renderUsers() {
    let users = this.props.users.users
    return users.map((user) => {
      return (
        <User user={user} />
      )
    })
  }

  render() {
    return (
      <div className='user-scroll'>
        <div className='user-tray'>
          {this.renderUsers()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps)(UserTray)
