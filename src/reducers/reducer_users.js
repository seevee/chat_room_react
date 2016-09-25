import { UPDATE_USER } from '../actions/index'

const INITIAL_STATE = {
  users: {
    1: { id: 1, username: 'Joker', status: 'Online' },
    2: { id: 2, username: 'Batman', status: 'Online' },
    3: { id: 3, username: 'Catwoman', status: 'Playing Halo' },
    4: { id: 4, username: 'Penguin', status: 'Away' },
    5: { id: 5, username: 'Robin', status: 'Away' }
  }
}


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_USER:
      return {
        ...state,
        users: {
          [action.id]: action.user
        }
      }
    default:
      return state
  }
}
