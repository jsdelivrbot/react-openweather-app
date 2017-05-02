import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';

export default class App extends Component {
  	render() {
    	return (
      		<div>
      			<h1>OpenWeatherApp</h1>
    			<SearchBar />  	
      		</div>
    	);
  	}
}
