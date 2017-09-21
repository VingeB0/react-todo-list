import React, {Component} from 'react';
import './search.css';

class Search extends React.Component {

	render() {
		return (
			<div className="wrap-search">
				<span>Search</span>
				<input type="text"/>
			</div>
		);
	}

}

export default Search;