import definitions from '../definitions/messages'

const initialState = {
  fetching: false,
  error: null
}

const messages = (state=initialState, action) => {
  if (action.type === definitions.SET_FECTHING) {
    return { fetching: action.fetching, error: state.error }
  } else if (action.type === definitions.SET_ERROR) {
    return { fetching: state.fetching, error: action.error }
  }
  return state
}

export default messages
