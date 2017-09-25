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
					id: 1,
					text: 'Go to a pet store',
					done: false
				},
				{
					id: 2,
					text: 'Buy a dog',
					done: false
				},
				{
					id: 3,
					text: 'Feed the dog',
					done: false
				},
				{
					id: 4,
					text: 'Walk the dog',
					done: false
				},
				{
					id: 5,
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

	addItemList = (text, maxIdItemMyArray) => {
		this.setState((prevState) => {
			let newArray = prevState.myArray.slice();
			maxIdItemMyArray++;
			newArray.push({id: maxIdItemMyArray, text, done: false});
			return {
				myArray: newArray
			};
		});
	};

	gelCountAllItems() {
		return this.state.myArray.length;
	}

	getCountAllDoneItems() {
		let count = 0;
		for (let i = 0, l = this.state.myArray.length; i < l; i++) {
			if (this.state.myArray[i].done) {
				count++
			}
		}
		return count;
	}

	updateInputValue = (evt) => {
		this.setState({
			inputValue: evt.target.value.substr(0, 44)
		});
	};

	render() {
		let filteredItems = this.state.myArray.filter(
			(arrItem) => {
				return arrItem.text.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1;
			}
		);
		let maxIdItemMyArray = Math.max.apply(Math,this.state.myArray.map(function(o){return o.id;}));
		return (
			<div>
				<h1 className="title">Simple <span className="title__sub">React todo list</span></h1>
				<div className="search">
					<input placeholder="Search..." type="text" value={this.state.inputValue}
						   onChange={this.updateInputValue}/>
				</div>
				<Counter gelCountAllItems={this.gelCountAllItems()} getCountAllDoneItems={this.getCountAllDoneItems()}/>
				<div className="list">
					<Form maxIdItemMyArray={maxIdItemMyArray} addItemList={this.addItemList}/>
					<ul>
						{filteredItems.map((item, index) =>
							<Item toggleDoneStatus={this.toggleDoneStatus} removeItemList={this.removeItemList}
								  index={index} text={item} key={this.state.myArray[index].id}/>
						)}
					</ul>
				</div>
			</div>
		);
	}
}

export default List;