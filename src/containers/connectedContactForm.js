import { connect } from 'react-redux'

import ContactForm from '../components/contactForm'
import { createMessage, dismissError } from '../actions/messages'

const mapDispatchToProps = (dispatch) => ({
  createMessage: createMessage(dispatch),
  dismissError: dismissError(dispatch)
})

const mapStateToProps = (state) => ({
  fetching: state.messages.fetching,
  error: state.messages.error
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
