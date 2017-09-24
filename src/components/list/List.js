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
					text: 'Go to a pet store',
					done: false
				},
				{
					text: 'Buy a dog',
					done: false
				},
				{
					text: 'Feed the dog',
					done: false
				},
				{
					text: 'Walk the dog',
					done: false
				},
				{
					text: 'Pet the dog',
					done: false
				}
			],
			inputValue: '',
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
		this.setState({
			inputValue: evt.target.value.substr(0, 44)
		});
		console.log(this.state.inputValue);
	};

	render() {
		let filteredItems = this.state.myArray.filter(
			(arrItem) => {
				return arrItem.text.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1;
			}
		);
		console.log(filteredItems);
		let all = this.state.myArray.length;
		let doned = this.halfAll();
		return (
			<div>
				<h1 className="title">Simple <span className="title__sub">React todo list</span></h1>
				<div className="search">
					<input placeholder="Search..." type="text" value={this.state.inputValue} onChange={this.updateInputValue}/>
				</div>
				<Counter allItems={all} allHalfItems={doned}/>
				<div className="list">
					<Form foo={this.addItemList.bind(this)}/>
					<ul>
						{filteredItems.map((item, index) =>
							<Item baz={this.toggleDoneStatus.bind(this)} bar={this.removeItemList.bind(this)}
								  index={index}
								  text={item} key={index}/>
						)}
					</ul>
				</div>
			</div>
		);
	}
}

export default List;