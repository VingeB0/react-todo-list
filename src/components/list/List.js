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
			]
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
		for(var i = 0, l = this.state.myArray.length; i < l; i++) {
			if(this.state.myArray[i].done){
				count++
			}
		}
		return count;
	};

	search() {
		var filteredArr = [];
		this.state.myArray.forEach(function(arrItem){
			if(arrItem.text.toLowerCase().indexOf(filteredArr)!=-1)
				filteredArr.push(arrItem);
		});
		console.log(filteredArr);
	}

	render() {
		let all = this.state.myArray.length;
		let doned = this.halfAll();
		this.search();
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
					<input type="text"/>
				</div>
			</div>
		);
	}
}

export default List;