import { combineReducers } from 'redux'
import ChatsReducer from './reducer_chats'
import UsersReducer from './reducer_users'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  chats: ChatsReducer,
  users: UsersReducer,
  form: formReducer
})

export default rootReducer
