import InfiniteScroll from "react-infinite-scroll-component";

import { Component } from "react";

import { HiMiniArrowLongRight } from "react-icons/hi2";

import UpcomingEventsItem from "../UpcomingEventsItem";

import "./index.css";

class UpcomingEvents extends Component {
  state = { upcomingEventList: [], pageNo: 1, totalEvents: "", totalPages: "" };
  componentDidMount() {
    this.getUpcomingEvents();
  }

  nextPage = () => {
    this.setState(
      (prevState) => ({ pageNo: prevState.pageNo + 1 }),
      this.getUpcomingEvents
    );
  };

  getUpcomingEvents = async () => {
    const { pageNo } = this.state;
    const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNo}&type=upcoming`;
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();
    this.setState((prevState) => ({
      upcomingEventList: [...prevState.upcomingEventList, data.events],
      totalEvents: data.totalEvents,
      totalPages: data.totalPages,
    }));
  };

  render() {
    const { upcomingEventList, totalPages } = this.state;

    return (
      <div className="upcoming-events-container">
        <div className="upcoming-events-header">
          <p className="upcoming-events-heading">Upcoming Events</p>
          <HiMiniArrowLongRight className="arrow-icon" />
        </div>
        <div>
          <InfiniteScroll
            dataLength={totalPages}
            next={this.nextPage}
            hasMore={true}
            loader={<p>Loading...</p>}
            endMessage={<p>No more data to load.</p>}
            children={upcomingEventList}
          >
            <ul className="upcoming-events-list-container">
              {upcomingEventList.map((item) => (
                <UpcomingEventsItem eachEvent={item} />
              ))}
            </ul>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
