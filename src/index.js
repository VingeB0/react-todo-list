import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './components/list/List.jsx';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
	render() {
		return (
			<div>
				<List/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
registerServiceWorker();
