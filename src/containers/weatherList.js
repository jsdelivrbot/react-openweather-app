import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
	renderWeather(city) {
		const name = city.city.name;
		const temps = city.list.map(weather => weather.main.temp);
		const pressures = city.list.map(weather => weather.main.pressure);
		const humidities = city.list.map(weather => weather.main.humidity);
		const { lat, lon } = city.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart data={temps} color="red" unit="°C" /></td>
				<td><Chart data={pressures} color="yellow" unit="hPA" /></td>
				<td><Chart data={humidities} color="blue" unit="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);

