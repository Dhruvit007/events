import {Component} from 'react'
import './index.css'

const registrationStatus = {
  initial: 'NO_ACTIVE',
  yetToRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  state = {
    status: registrationStatus.initial,
  }

  renderNoActiveEvent = () => (
    <div className="yet-to-register-container">
      <div className="contain-container">
        <h1 className="no-event-heading">
          Click on an event, to view its registration details
        </h1>
      </div>
    </div>
  )

  renderYetToRegister = () => (
    <div className="yet-to-register-container">
      <div className="contain-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-to-register-image"
        />
        <p className="yet-to-register-paragraph">
          A live Performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with
          beautiful art form
        </p>
        <button className="register-now-button" type="button">
          Register Here
        </button>
      </div>
    </div>
  )

  renderRegistered = () => (
    <div className="yet-to-register-container">
      <div className="contain-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-image"
        />
        <h1 className="registered-paragraph">
          You have already registered for the event
        </h1>
      </div>
    </div>
  )

  renderRegistrationClosed = () => (
    <div className="yet-to-register-container">
      <div className="contain-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registered-image"
        />
        <h1>Registration Are Closed Now!</h1>
        <p className="registered-paragraph">
          Stay tuned. We will reopen the registration soon!
        </p>
      </div>
    </div>
  )

  render() {
    const {status} = this.state
    switch (status) {
      case registrationStatus.initial:
        return this.renderNoActiveEvent()
      case registrationStatus.yetToRegistered:
        return this.renderYetToRegister()
      case registrationStatus.registered:
        return this.renderRegistered()
      case registrationStatus.closed:
        return this.renderRegistrationClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
