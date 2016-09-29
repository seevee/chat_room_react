import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Avatar from 'react-avatar'
import { updateUser } from '../actions/index'
import * as config from '../config'

class User extends Component {
  onStatusClick(props) {
    let user = this.props.user
    user.status = config.randomStatus()
    this.props.updateUser(user)
  }

  render() {
    let indicatorStyle = styleIndicator(this.props.user.status)
    let style = {
      color: indicatorStyle.color
    }

    return (
      <div className='user'>
        <i
          style={style}
          className={(indicatorStyle.spin ? 'fa-spin ' : '') + 'user-icon fa fa-circle-o-notch fa-2x'}
          onClick={this.onStatusClick.bind(this)}
        />
        <Avatar size='50' className='user-avatar' name={this.props.user.username} />
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

const styleIndicator = (status) => {
  let color = '#43A6D8'
  let spin = true
  switch (status) {
    case 'Online':
      color = 'green'
      spin = true
      break
    case 'Offline':
      color = '#666666'
      spin = false
      break
    case 'Away':
      color = 'yellow'
      spin = false
      break
  }
  return {
    color: color,
    spin: spin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(User)
