import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Avatar from 'react-avatar'
import { updateUser } from '../actions/index'

class User extends Component {
  onStatusClick(props) {
    console.log('Status clicked')
    let user = this.props.user
    user.status = Math.random()
    this.props.updateUser(user)
  }
  render() {
    return (
      <div className='user'>
        <i className='user-icon fa fa-circle-o-notch fa-2x' />
        <Avatar size='50' className='user-avatar' />
        <div className='user-info'>
          <div className='user-name'>{this.props.user.username}</div>
          <div
            className='user-status'
            onClick={this.onStatusClick.bind(this)}>
            {this.props.user.status}
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(User)
