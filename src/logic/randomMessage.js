import messages from '../constants/messages'
import randomElement from './randomElement'

export default function randomMessage() {
  return randomElement(messages)
}
