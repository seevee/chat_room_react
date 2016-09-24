import { CREATE_CHAT } from '../actions/index'

const INITIAL_STATE = { chats: [] }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_CHAT:
      return Object.assign({}, state, {
        chats: [
          ...state.chats,
          {
            id: action.id,
            text: action.text,
            user: action.user
          }
        ]
      })
    default:
      return state
  }
}
