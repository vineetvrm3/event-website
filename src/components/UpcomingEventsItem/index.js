import "./index.css";

const UpcomingEventsItem = (props) => {
  const { eachEvent } = props;
  const { eventName, cityName, date, weather, distanceKm } = eachEvent;

  return (
    <li className="upcoming-event-item">
      <img
        className="event-item-img"
        src="https://res.cloudinary.com/dlubbarfa/image/upload/v1711884570/Rectangle_21_tvbgtl.svg"
        alt="event img"
      />
      <p>{date}</p>
      <p>{eventName}</p>
      <p>{cityName}</p>
      <p>{`${weather}|${Math.ceil(distanceKm) / 100}Km`}</p>
    </li>
  );
};

export default UpcomingEventsItem;
