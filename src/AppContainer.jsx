import './App.css';
import React, {useEffect} from 'react'
import {getWeatherData, setCityFound} from "./reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import App from "./App";


function AppContainer (props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{props.getWeatherData(props.city)},[]);

  return <App getWeatherData={props.getWeatherData}
              city={props.city}
              temp={props.temp}
              searchedCities={props.searchedCities}
              cityFound={props.cityFound}
              setCityFound={props.setCityFound}
              />
  }

const mapStateToProps = (state) => ({
  city:state.weatherReducer.weatherData.city,
  temp:state.weatherReducer.weatherData.temp,
  searchedCities:state.weatherReducer.searchedCities,
  cityFound:state.weatherReducer.cityFound

});



export default compose (connect(mapStateToProps, {getWeatherData,setCityFound}))(AppContainer);



