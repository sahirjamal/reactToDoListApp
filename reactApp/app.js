import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ["sahir", "sahir1", "shridhar", "hello", "fuck shridhar", "lisa wont survive in GoT", 
				"bilbo baggins", "THE HOUSE IS ON FIRE", "oh man"];

class TodoList extends React.Component {
	render() {
		return (
				<div>
					<ul>
						{this.props.dummyData.map((task) => <li>{task}</li>)}
					</ul>
				</div>
			)
	}
}

// class Todo extends React.Component {
// 	render() {}
// }



ReactDOM.render(<TodoList dummyData={dummyData} />,
	document.getElementById('root'));