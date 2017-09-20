import React, {Component} from 'react';
import './App.css';
import TodoWrap from './todo-components/todoWrap.js';

class App extends Component {
	render() {
		return (
			<div>
				<TodoWrap/>
			</div>
		);
	}
}

export default App;
