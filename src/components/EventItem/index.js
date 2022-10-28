import './index.css'

const EventItem = props => {
  const {eachEvent} = props
  const {imageUrl, name, location} = eachEvent
  return (
    <button className="event-btn" type="button">
      <li className="event-item">
        <img src={imageUrl} alt="event" className="event-image" />
        <h1 className="event-name">{name}</h1>
        <p className="event-location">{location}</p>
      </li>
    </button>
  )
}

export default EventItem
