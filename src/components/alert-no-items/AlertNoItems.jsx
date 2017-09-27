import React, {Component} from 'react';
import './alert-no-items.css';

class AlertNoItems extends React.Component {
	render() {
		if (this.props.myArray.length === 0) {
			return <h3 className="alert">No <span className="alert__sub">items!</span> Please add some <span className="alert__sub">items!</span></h3>
		} else if (this.props.filterArrItemsInputSearch.length === 0) {
			return <h3 className="alert"><span className="alert__sub">No</span> items found <span className="alert__sub">!!!</span></h3>
		}
		return null;
	}
}

export default AlertNoItems;
