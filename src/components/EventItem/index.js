import './index.css'

const EventItem = props => {
  const {eachEvent, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eachEvent
  const eventClick = () => {
    onClickEvent(registrationStatus)
  }
  return (
    <li className="event-item">
      <button onClick={eventClick} className="event-btn" type="button">
        <img src={imageUrl} alt="event" className="event-image" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
