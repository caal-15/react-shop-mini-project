import axios from 'axios'

import serverConf from '../config/server'
import definitions from '../definitions/messages'

export const createMessage = (dispatch) => {
  return (data) => {
    dispatch({ type: definitions.SET_FECTHING, fetching: true })
    axios
      .post(serverConf.url + '/messages', data)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
          dispatch({
            type: definitions.SET_ERROR,
            error: 'There was an error creating your message'
          })
      })
      .then(() => {
        dispatch({ type: definitions.SET_FECTHING, fetching: false })
      })
  }
}

export const dismissError = (dispatch) => {
  return () => {
    dispatch({ type: definitions.SET_ERROR, error: null })
  }
}
