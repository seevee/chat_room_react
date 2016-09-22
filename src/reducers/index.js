import { combineReducers } from 'redux'
import ChatsReducer from './reducer_chats'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  chats: ChatsReducer,
  form: formReducer
})

export default rootReducer
