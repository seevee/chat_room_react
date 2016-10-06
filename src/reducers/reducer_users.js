import { UPDATE_USER } from '../actions/index'

const INITIAL_STATE = {
  users: [
    { id: 1, username: 'Joker', status: 'Online' },
    { id: 2, username: 'Batman', status: 'Online' },
    { id: 3, username: 'Catwoman', status: 'Playing Halo' },
    { id: 4, username: 'Penguin', status: 'Away' },
    { id: 5, username: 'Robin', status: 'Away' },
    { id: 6, username: 'Joker', status: 'Online' },
    { id: 7, username: 'Batman', status: 'Online' },
    { id: 8, username: 'Catwoman', status: 'Playing Halo' },
    { id: 9, username: 'Penguin', status: 'Away' },
    { id: 10, username: 'Robin', status: 'Away' }
  ]
}


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_USER:
      return {
        ...state
      }
    default:
      return state
  }
}
