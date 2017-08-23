import './Loading.less';
import React from 'react';
export class Loading extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="loading" className='loading-hide'>
				<div id="circularG">
					<div id="circularG_1" className="circularG"></div>
					<div id="circularG_2" className="circularG"></div>
					<div id="circularG_3" className="circularG"></div>
					<div id="circularG_4" className="circularG"></div>
					<div id="circularG_5" className="circularG"></div>
					<div id="circularG_6" className="circularG"></div>
					<div id="circularG_7" className="circularG"></div>
					<div id="circularG_8" className="circularG"></div>
				</div>
			</div>
		);
	}
}

let IS_BUSY = false;

export function busy() {
	if (!IS_BUSY) {
		IS_BUSY = true;
		document.getElementById('loading').className = '';
	}
}

export function idle() {
	if (IS_BUSY) {
		IS_BUSY = false;
		document.getElementById('loading').className = 'loading-hide';
	}
}
