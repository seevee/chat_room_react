import React, { Component } from 'react'
import { reset, reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { createChat, updateUser } from '../actions/index'
import * as config from '../config'

function recurseRandomMessages() {
  let users = this.props.users.users.filter((user) => {
    return user.status !== 'Offline' &&
    user.status !== 'Away' &&
    user.id !== 1
  })
  let message = {
    text: config.randomMessage(),
    username: config.randomElement(users).username
  }
  setTimeout(() => {
    this.props.dispatch(createChat(message))
    recurseRandomMessages.apply(this)
  }, config.randomTime() * 3)
}

function recurseRandomStatuses() {
  let users = this.props.users.users.filter((user) => {
    return user.id !== 1
  })
  let user = config.randomElement(users)
  user.status = config.randomStatus()
  setTimeout(() => {
    this.props.dispatch(updateUser(user))
    recurseRandomStatuses.apply(this)
  }, config.randomTime() * 8)
}

function sendBotReply(chat) {
  let users = this.props.users.users
  for (let i = 1; i < users.length; i++) {
    if (chat.text.toLowerCase().indexOf(users[i].username.toLowerCase()) !== -1) {
      let reply = {
        text: config.randomElement(config.replies) + chat.username,
        username: users[i].username
      }
      setTimeout(() => {
        this.props.dispatch(createChat(reply))
      }, config.randomTime())
    }
  }
}

class NewChatForm extends Component {
  constructor(props) {
    super(props)

    this.onSend = this.onSend.bind(this)
    recurseRandomMessages.call(this)
    recurseRandomStatuses.call(this)
  }

  onSend(props) {
    let chat = {
      text: props.chat,
      username: this.props.users.users[0].username
    }
    this.props.dispatch(createChat(chat))
    this.props.dispatch(reset('NewChatForm'))
    sendBotReply.call(this, chat)
  }

  sendBotReply(chat) {
    let users = this.props.users.users
    for (let i = 1; i < users.length; i++) {
      if (chat.text.toLowerCase().indexOf(users[i].username.toLowerCase()) !== -1) {
        let reply = {
          text: config.randomElement(config.replies) + chat.username,
          username: users[i].username
        }
        setTimeout(() => {
          this.props.dispatch(createChat(reply))
        }, config.randomTime())
      }
    }
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form
        className='chat-form'
        onSubmit={handleSubmit(this.onSend)}>
        <label>Joker</label>
        <Field
          name='chat'
          component='input'
          type='text'
        />
        <button
          type='submit'
          disabled={ pristine || submitting }>
          Send
        </button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if(!values.text) {
    errors.text = 'Cannot send blank chat'
  }

  return errors
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

NewChatForm = reduxForm({
  form: 'NewChatForm'
})(NewChatForm)

export default connect(mapStateToProps)(NewChatForm)
