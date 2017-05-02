import React, { Component } from 'react';
//import { connect } from 'react-redux';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form 
				className="input-group"
				onSubmit={this.onFormSubmit}
			>
				<input 
					placeholder="Get a five-day forecast for your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}