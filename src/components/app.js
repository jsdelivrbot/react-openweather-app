import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList';

export default class App extends Component {
  	render() {
    	return (
      		<div>
      			<h1>OpenWeatherApp</h1>
    			<SearchBar />
    			<WeatherList />
      		</div>
    	);
  	}
}
