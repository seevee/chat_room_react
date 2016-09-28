import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Avatar from 'react-avatar'
import { updateUser } from '../actions/index'
import * as config from '../config'

class User extends Component {
  onStatusClick(props) {
    console.log('Status clicked')
    let user = this.props.user
    let status = ''
    let index = Math.floor(Math.random() * config.statuses.length)
    status = status.concat(config.statuses[index])
    if (index === config.statuses.length - 1) {
      status = status.concat(' ', config.games[Math.floor(Math.random() * config.games.length)])
    }
    user.status = status
    this.props.updateUser(user)
  }
  styleIndicator() {
    let indicatorColor = '#43A6D8'
    let spin = true
    switch (this.props.user.status) {
      case 'Online':
        indicatorColor = 'green'
        spin = true
        break
      case 'Offline':
        indicatorColor = '#666666'
        spin = false
        break
      case 'Away':
        indicatorColor = 'yellow'
        spin = false
        break
    }
    return {
      color: indicatorColor,
      spin: spin
    }
  }
  render() {
    let indicatorStyle = this.styleIndicator()
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(User)
