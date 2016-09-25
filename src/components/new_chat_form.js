import React, { Component } from 'react'
import { reset, reduxForm, Field } from 'redux-form'
import { createChat } from '../actions/index'

class NewChatForm extends Component {
  constructor(props) {
    super(props)

    this.onSend = this.onSend.bind(this)
  }

  onSend(props) {
    console.log(props)
    let chat = {
      text: props.chat,
      username: 'Joker'
    }
    this.props.dispatch(createChat(chat))
    this.props.dispatch(reset('NewChatForm'))
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

NewChatForm = reduxForm({
  form: 'NewChatForm'
})(NewChatForm)

export default NewChatForm
