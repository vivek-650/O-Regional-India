// import React from 'react';
import '../styles/WeatherCard.css';

export const WeatherCard = (props) => {
  return (
    <div>
      <div className="container">
        <div className="weather__header">
          <h1>How it feels like out there !</h1>
        </div>

        <div className="weather__body">
          <h1 className="weather__city">{props.city}</h1>
          <div className="weather__datetime">{props.datetime}</div>
          <div className="weather__forecast">{props.forecast}</div>
          <div className="weather__icon">
            {/* <img src={props.iconUrl} alt="weather icon" /> */}
          </div>
          <p className="weather__temperature">{props.temperature}&#176;C</p>
          <div className="weather__minmax">
            <p>Min: {props.minTemp}&#176;C</p>
            <p>Max: {props.maxTemp}&#176;C</p>
          </div>
        </div>

        <div className="weather__info">
          <div className="weather__card">
            <i className="fa-solid fa-temperature-full"></i>
            <div>
              <p>Real Feel</p>
              <p className="weather__realfeel">{props.realFeel}&#176;C</p>
            </div>
          </div>
          <div className="weather__card">
            <i className="fa-solid fa-droplet"></i>
            <div>
              <p>Humidity</p>
              <p className="weather__humidity">{props.humidity}%</p>
            </div>
          </div>
          <div className="weather__card">
            <i className="fa-solid fa-wind"></i>
            <div>
              <p>Wind</p>
              <p className="weather__wind">{props.windSpeed} km/h</p>
            </div>
          </div>
          <div className="weather__card">
            <i className="fa-solid fa-gauge-high"></i>
            <div>
              <p>Pressure</p>
              <p className="weather__pressure">{props.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
