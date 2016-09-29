import React, { Component } from 'react'
import { reset, reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { createChat } from '../actions/index'
import * as config from '../config'

class NewChatForm extends Component {
  constructor(props) {
    super(props)

    this.onSend = this.onSend.bind(this)
    this.sendBotReply = this.sendBotReply.bind(this)
  }

  onSend(props) {
    let chat = {
      text: props.chat,
      username: this.props.users.users[0].username
    }
    this.props.dispatch(createChat(chat))
    this.props.dispatch(reset('NewChatForm'))
    this.sendBotReply(chat)
  }

  sendBotReply(chat) {
    let users = this.props.users.users
    for (let i = 0; i < users.length; i++) {
      if (chat.text.indexOf(users[i].username) !== -1) {
        let reply = {
          text: config.replies[Math.floor(Math.random() * config.replies.length)] + chat.username,
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
