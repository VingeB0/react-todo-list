import React, {Component} from 'react';
import './form.css';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};
	}

	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value
		});
	}

	render() {
		return (
			<div className="form">
				<input className="form__input" type="text" name="valueItem" placeholder="Add something to the list!"
					   value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
				<button className="form__btn" onClick={() => this.props.foo(this.state.inputValue)}>Add item</button>
			</div>
		);
	}
}

export default Form;