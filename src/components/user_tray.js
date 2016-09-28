import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GenericScrollBox, FastTrack } from 'react-scroll-box'
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
      <GenericScrollBox scrollableY fastTrack={FastTrack.PAGING} className='user-scroll'>
        <div className='scroll-box__viewport user-tray'>
          {this.renderUsers()}
        </div>
      </GenericScrollBox>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps)(UserTray)
