let nextChatId = 0
export const CREATE_CHAT = 'CREATE_CHAT'
export const UPDATE_USER_STATUS = 'UPDATE_STATUS'

export function createChat(props) {
  return {
    type: CREATE_CHAT,
    id: nextChatId++,
    user: props.username,
    text
  }
}

export function updateStatus(props) {
  return {
    type: UPDATE_USER_STATUS,
    user: props.username,
    status
  }
}
