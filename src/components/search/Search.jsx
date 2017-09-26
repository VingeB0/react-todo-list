import React, {Component} from 'react';
import './search.css';

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
	}

	updateInputValue = (evt) => {
		this.setState({
			inputValue: evt.target.value.substr(0, 44)
		});
	};

	render() {
		console.log(this.updateInputValue);
		console.log(this.state.inputValue);
		return (
			<div className="search">
				<input placeholder="Search..." type="text" value={this.state.inputValue}
					   onChange={evt => this.updateInputValue(evt)}/>
					   {/*onChange={evt => this.props.filterArrItemsInputSearch(this.updateInputValue(evt))}/>*/}
			</div>
		);
	}

}

export default Search;