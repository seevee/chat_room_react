let nextChatId = 0
export const CREATE_CHAT = 'CREATE_CHAT'
export const UPDATE_USER = 'UPDATE_USER'

export function createChat(props) {
  return {
    type: CREATE_CHAT,
    id: nextChatId++,
    user: props.username,
    text: props.text
  }
}

export function updateUser(props) {
  return {
    type: UPDATE_USER,
    user: props
  }
}
