import React from 'react';
import ReactDOM from 'react-dom';


class Main extends React.Component {

	render() {
		return (
			<div>
				<h1> Welcome to Waitlist</h1>
				<h1> This is react with webpack!!!!</h1>
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('app'));
