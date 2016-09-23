import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { createChat } from '../actions/index'

class NewChatForm extends Component {
  onSend(props) {
    let chat = props
    chat.username = 'Joker'
    //console.log('chat: ', chat)
    this.props.dispatch(createChat(chat))
  }

  render() {
    const { fields: { text }, handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSend.bind(this))}>
        NewChatForm
        <label>Joker</label>
        <Field name='text' component='input' type='text' />
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

export default reduxForm({
  form: 'ChatsNewForm',
  fields: ['text'],
  validate
}, null, { createChat })(NewChatForm)
