import React, { Component } from 'react'
import { TextField, Paper, Button } from 'react-md'
import { runInThisContext } from 'vm';

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = { firstName: '', lastName: '', email: '', subject: '' }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubjectChange = this.handleSubjectChange.bind(this)
    this.postData = this.postData.bind(this)
  }

  handleNameChange(value) {
    this.setState({ firstName: value })
  }

  handleLastNameChange(value) {
    this.setState({ lastName: value })
  }

  handleEmailChange(value) {
    this.setState({ email: value })
  }

  handleSubjectChange(value) {
    this.setState({ subject: value })
  }

  postData(ev) {
    ev.preventDefault()
    console.log('Gonna send')
    this.setState({ firstName: '', lastName: '', email: '', subject: '' })
  }

  render() {
    const { firstName, lastName, email, subject } = this.state
    let disabled = false
    for (let key in this.state) {
      if (!this.state[key]) { disabled = true }
    }
    return (
      <div className='contact-form__wrapper'>
        <Paper zDepth={1} className='contact-form__paper'>
          <form>
            <TextField
              id='first-name-field'
              required
              label='First Name'
              placeholder='Your Name...'
              errorText='Please write down your first name'
              value={firstName}
              onChange={this.handleNameChange}
            />
            <TextField
              id='last-name-field'
              required
              label='Last Name'
              placeholder='Your Last Name...'
              errorText='Please write down your last name'
              value={lastName}
              onChange={this.handleLastNameChange}
            />
            <TextField
              id='email-field'
              type='email'
              required
              label='Email'
              placeholder='Your Email...'
              errorText="Don't forget to tell us what your email address is"
              value={email}
              onChange={this.handleEmailChange}
            />
            <TextField
              rows={4}
              id='email-field'
              required
              label='Subject'
              placeholder='Let us know your concerns!'
              errorText="Don't forget to write something useful!"
              value={subject}
              onChange={this.handleSubjectChange}
            />
            <div className='contact-form__submit__wrapper'>
              <Button
                className='contact-form__submit'
                type='submit'
                raised
                disabled={disabled}
                onClick={this.postData}
              >
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    )
  }
}

export default ContactForm
