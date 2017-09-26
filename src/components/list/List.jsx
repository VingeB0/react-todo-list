import React, {Component} from 'react';
import './list.css';
import Title from '../title/Title.jsx';
import Item from '../list-item/Item.jsx';
import Form from '../form/Form';
import Counter from '../counter/Counter.jsx';
import Search from '../search/Search.jsx';

class List extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			myArray: [
				{
					id: 11,
					text: 'Go to a pet store',
					done: false
				},
				{
					id: 4,
					text: 'Buy a dog',
					done: false
				},
				{
					id: 7,
					text: 'Feed the dog',
					done: false
				},
				{
					id: 9,
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
			filteredData: undefined,
			noItemsList: 'Not found'
		};
	}

	toggleDoneStatus = (key) => {
		this.setState((prevState) => {
			let newArray = prevState.myArray.slice();
			newArray[key].done = !newArray[key].done;
			return {
				myArray: newArray
			};
		})
	};

	removeItemList = (key) => {
		this.setState((prevState) => {
			let newArray = prevState.myArray.slice();
			newArray.splice(key, 1);
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

	getIdAddNewItem = () => {
		return Math.max.apply(Math, this.state.myArray.map(function (myArrayItem) {
			return myArrayItem.id;
		}));
	};

	filterArrItemsInputSearch = () => {
		return this.state.myArray.filter(
			(arrItem) => {
				return arrItem.text.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1;
			}
		);
	};

	listItems = () => {
		return this.filterArrItemsInputSearch().map((item, index) =>
			<Item toggleDoneStatus={this.toggleDoneStatus} removeItemList={this.removeItemList}
				  index={index} text={item} key={this.state.myArray[index].id}/>
		)
	};

	updateInputValue = (evt) => {
		this.setState({
			inputValue: evt.target.value.substr(0, 44)
		});
	};

	render() {
		// console.log(this.state.myArray);
		return (
			<div>
				<Title/>
				{/*<Search/>*/}
				{/*<Search filterArrItemsInputSearch={this.filterArrItemsInputSearch}/>*/}
				<div className="search">
					<input placeholder="Search..." type="text" value={this.state.inputValue}
						   onChange={this.updateInputValue}/>
				</div>
				<Counter gelCountAllItems={this.gelCountAllItems()} getCountAllDoneItems={this.getCountAllDoneItems()}/>
				<div className="list">
					<Form getIdAddNewItem={this.getIdAddNewItem} addItemList={this.addItemList}/>
					<ul>
						{this.listItems()}
					</ul>
				</div>
			</div>
		);
	}
}

export default List;