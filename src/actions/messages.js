import superagent from 'superagent'

import serverConf from '../config/server'
import definitions from '../definitions/messages'

export const createMessage = (dispatch) => {
  return (data) => {
    dispatch({ type: definitions.SET_FECTHING, fetching: true })
    superagent
      .post(serverConf.url + '/messages')
      .send(data)
      .end((err, res) => {
        dispatch({ type: definitions.SET_FECTHING, fetching: false })
        if (err) {
          console.log(err)
          dispatch({
            type: definitions.SET_ERROR,
            error: 'There was an error creating your message'
          })
        } else {
          console.log(res.body)
        }
      })
  }
}

export const dismissError = (dispatch) => {
  return () => {
    dispatch({ type: definitions.SET_ERROR, error: null })
  }
}
