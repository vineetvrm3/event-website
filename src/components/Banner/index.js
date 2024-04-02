import { Component } from "react";

import { HiMiniArrowLongRight } from "react-icons/hi2";
import RecommendedEvents from "../RecommendedEvents";
import UpcomingEvents from "../UpcomingEvents";

import { Oval } from "react-loader-spinner";

import "./index.css";

class Banner extends Component {
  state = { recommendedEvents: [], upComingsEvents: [], isLoading: true };
  componentDidMount() {
    this.getRecommendedShows();
  }

  renderRecommendedShows = () => {
    const { recommendedEvents } = this.state;
    return (
      <ul className="recommended-events-list-container">
        {recommendedEvents.map((eachEvent) => (
          <RecommendedEvents eachEvent={eachEvent} />
        ))}
      </ul>
    );
  };

  //Get the data from the api
  getRecommendedShows = async () => {
    const url =
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.events);
    this.setState({ recommendedEvents: data.events, isLoading: false });
  };

  renderLoader = () => (
    <div>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <div className="banner-bg-container">
          <h1 className="banner-heading">
            Discover Exciting Events Happening <br /> Near You -Stay Tuned for
            Updates!
          </h1>
          <p className="banner-description">
            Dorem ipsum dolor sit amet,consectetur adispiscing elit. Nunc
            vulputate libero et velit interdum, <br /> ac aliquet odio mattis.
            Class aptent taciti socioqu ad titora torquent per conubia
            nostra,per
          </p>
        </div>
        <div className="recommended-shows-container">
          <div className="recommended-shows-header">
            <div className="recommended-shows-heading-icon-container">
              <p className="recommended-shows-heading">Recommended Shows</p>
              <HiMiniArrowLongRight className="arrow-icon" />
            </div>
            <p className="see-all">See all</p>
          </div>
          {isLoading ? this.renderLoader() : this.renderRecommendedShows()}
        </div>
        <UpcomingEvents />
      </>
    );
  }
}

export default Banner;
