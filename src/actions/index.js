let nextChatId = 0
export const CREATE_CHAT = 'CREATE_CHAT'

export function createChat(props) {
  return {
    type: CREATE_CHAT,
    id: nextChatId++,
    user: props.username,
    text: props.text
  }
}
