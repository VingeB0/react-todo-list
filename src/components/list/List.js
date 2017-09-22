import React, {Component} from 'react';
import './list.css';
import Item from '../list-item/Item.js';
import Form from '../form/Form.js';
import Counter from '../counter/Counter.js';
import Search from '../search/Search.js';

class List extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			myArray: [
				{
					text: 'first item',
					done: false
				},
				{
					text: 'first i124tem',
					done: false
				},
				{
					text: 'first item424',
					done: false
				}
			],
			inputValue: 'write what to search',
			filteredData: undefined
		};
	}

	toggleDoneStatus = (index) => {
		this.setState((prevState) => {
			let newArray = prevState.myArray.slice();
			newArray[index].done = !newArray[index].done;
			return {
				myArray: newArray
			};
		})
	};

	removeItemList = (index) => {
		this.setState((prevState) => {
			let newArray = prevState.myArray.slice();
			newArray.splice(index, 1);
			return {
				myArray: newArray
			};
		})
	};

	addItemList = (text) => {
		this.setState((prevState) => {
			let newArray = prevState.myArray.slice();
			newArray.push({text, done: false});
			return {
				myArray: newArray
			};
		});
	};

	halfAll() {
		var count = 0;
		for (var i = 0, l = this.state.myArray.length; i < l; i++) {
			if (this.state.myArray[i].done) {
				count++
			}
		}
		return count;
	};

	updateInputValue = (evt) => {
		var mmyArr = [];
		this.setState({
			inputValue: evt.target.value,
		});
		for (var i = 0, l = this.state.myArray.length; i < l; i++) {
			if (this.state.myArray[i].text === evt.target.value) {
				mmyArr.push(evt.target.value);
			}
		}
		console.log(mmyArr);
		return mmyArr;
	};

	render() {
		this.updateInputValue;
		let all = this.state.myArray.length;
		let doned = this.halfAll();
		return (
			<div>
				<ul>
					{this.state.myArray.map((item, index) =>
						<Item baz={this.toggleDoneStatus.bind(this)} bar={this.removeItemList.bind(this)} index={index}
							  text={item} key={index}/>
					)}
				</ul>
				<Form foo={this.addItemList.bind(this)}/>
				<div><Counter allItems={all} allHalfItems={doned}/></div>
				{/*<div><Search/></div>*/}
				<div className="wrap-search">
					<span>Search</span>
					<input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
					<span>Result search:</span>
					<ul>
						<li>123</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default List;