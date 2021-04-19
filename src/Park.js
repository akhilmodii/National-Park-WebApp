import React, { Component } from 'react';
import Buttons from './Buttons.js';
import { connect } from 'react-redux';
import { toggleVisitedPark, toggleBucketListPark, setParkCardToShow } from './actions/index.js';
import {Dialog} from "./Dialog";

class Park extends Component {
 constructor(props) {
    super(props);
    this.state = {
      displayFull: false  
   };
 }
  toggleFullCard= () => {
    this.setState({
      displayFull: !this.state.displayFull
    });
  }

  removeCard = (event) => {
    event.preventDefault();
    this.props.setParkCardToShow('');
    this.setState({
      displayFull: false,
    });
  }

  setStateText = () => {
    const { states } = this.props.park;
    if (states.length === 1) {
      return `State: ${states[0]}`
    } else {
      return states.reduce((acc, state, index) => {
        acc = index === 0 ? `States: ${state}` : acc + `, ${state}`;
        return acc;
      }, '');
    }
  }

  render() {
    const { name, images, url, description, weatherInfo, directionsInfo, entranceFees, activities} = this.props.park;
    const { displayFull } = this.state;
    const stateText = this.setStateText();
    // const {eFees} = entranceFees.map((d) => <li>key={d.cost}>{d.cost}</li>
    return (
      <div className="card-overlay">


          <div className={displayFull ? "park-card-large" : "park-card-small"}>
          <div className={displayFull ? "park-text-large" : ""}>
            <i className="far fa-times-circle" onClick={this.removeCard}></i>

            <h1 className="park-title">{name} National Park</h1>
            {
              !displayFull && <img className="park-img-small" alt="park" src={images[0].url} />
            }

            <h3>{stateText}</h3>
            <a className="nps-link" href={url} target="_blank">Link to {name}'s National Park Service Page</a>
              {/*<h2>Park Description:</h2>*/}
              <h3 className="park-descrip"> <h2>Park Description:</h2> {description}</h3>

              <h3 className="weather-info"> <h2>Weather Information:</h2>{weatherInfo}</h3>
              <h3 className="directions"><h2>Directions to the Park:</h2> {directionsInfo}</h3>
              {/*<h3>*/}
              {/*    {entranceFees.map(function(d){*/}
              {/*        return (<li>{d.cost}</li>)*/}
              {/*    })}*/}
              {/*</h3>*/}

              <h3 className= {"activities"}> <h2>Park Activities:</h2>
                  {activities.map(function(d){
                      return (<li>{d.name}</li>)
                  })}
              </h3>
            <button className="button-small" onClick={this.toggleFullCard}>{displayFull ? "View Less" : "View More"}</button>
              <div className="user-list-btns">
                  <Buttons
                      iconType="fas fa-hiking"
                      storageKey="visited"
                  />
                  <Buttons
                      iconType="fas fa-clipboard-list"
                      storageKey="bucket"
                  />
                  <div>
                      <button onClick={(e) => this.setState({isOpen: true})} id="show-bucket-button"> Bookings </button>
                      <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                          <h2>Bookings</h2>
                          <li><a href={"https://www.tripadvisor.com/Hotels-g60999-Yellowstone_National_Park_Wyoming-Hotels.html\n"}>Hotels</a></li>
                          <li><a href={"https://www.tripadvisor.com/Restaurants-g60999-Yellowstone_National_Park_Wyoming.html\n"}>Restaurants</a></li>
                          <li><a href={"https://www.tripadvisor.com/Attractions-g60999-Activities-Yellowstone_National_Park_Wyoming.html\n"}>Things to Do</a></li>
                          <li><a href={"https://www.tripadvisor.com/Flights-g60999-Yellowstone_National_Park_Wyoming-Cheap_Discount_Airfares.html\n"}>Travel Forums</a></li>
                          <li><a href={"https://www.tripadvisor.com/ShowForum-g60999-i481-Yellowstone_National_Park_Wyoming.html\n"}>Flights</a></li>
                      </Dialog>
                  </div>
                  {/*<Buttons*/}
                  {/*    iconType="fas fa-booking"*/}
                  {/*    storageKey="visited"*/}
                  {/*/>*/}
              </div>
          </div>
          {
            displayFull && <img className="park-img-large" alt="park" src={images[images.length-1].url} />
          }

        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleVisitedPark: (parkCode) => dispatch(toggleVisitedPark(parkCode)),
  toggleBucketListPark: (parkCode) => dispatch(toggleBucketListPark(parkCode)),
  setParkCardToShow: (parkCode) => dispatch(setParkCardToShow(parkCode)),
});

export default connect(null, mapDispatchToProps)(Park);