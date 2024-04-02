import {
    RecommendedEventsContainer,
    EventTitle,
    Details,
    ContentContainer,
  } from "./styledComponent";
  
  import { TiLocation } from "react-icons/ti";
  import { format } from "date-fns";
  
  const RecommendedEvents = (props) => {
    const { eachEvent } = props;
    const { cityName, date, distanceKm, eventName, imgUrl, weather } = eachEvent;
    const formattedDate = format(new Date(date), "MM/dd/yyyy");
  
    return (
      <RecommendedEventsContainer imgUrl={imgUrl}>
        <ContentContainer>
          <EventTitle>{eventName}</EventTitle>
          <Details>{formattedDate}</Details>
        </ContentContainer>
        <ContentContainer>
          <Details>
            <TiLocation />
            {cityName}
          </Details>
          <Details>{`${weather} | ${Math.ceil(distanceKm / 100)}Km`}</Details>
        </ContentContainer>
      </RecommendedEventsContainer>
    );
  };
  
  export default RecommendedEvents;
  