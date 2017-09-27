import React, {Component} from 'react';
import './form.css';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};
	}

	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value
		});
	}

	clearInput() {
		this.setState({
			inputValue: ''
		})
	}

	render() {
		return (
			<div className="form">
				<input value={this.state.inputValue} autoFocus className="form__input" type="text" name="valueItem" placeholder="Add something to the list!"
					   onChange={evt => this.updateInputValue(evt)}/>
				<button disabled={!this.state.inputValue} className="form__btn" onClick={() => {this.props.addItemList(this.state.inputValue, this.props.getMaxIdAddNewItem()); this.clearInput()}}>Add item</button>
			</div>
		);
	}

}

export default Form;