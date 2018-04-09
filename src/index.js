import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	consructor(props){
		super(props);
	}

	render() {
		return <div>Hello!</div>
	}
}

ReactDOM.render(<App />, document.getElementById("root"));