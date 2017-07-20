import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
	{ taskText: "finish this shit", completed: false },
	{ taskText: "hit the gym", completed: false },
	{ taskText: "make money", completed: true },
	{ taskText: "win", completed: false },
	{ taskText: "WINNNNNNNNN!!!", completed: false },
	{ taskText: "slap Shridhar", completed: false },
];

class TodoApp extends React.Component {
	constructor(props) {
		super(props),
		this.state = {
			todos: []
		}
	}

	componentDidMount() {
		this.setState({todos: dummyData}).bind(this);
	}

	render() {
		return(
			<div>
				<InputLine />
				<TodoList todos={this.state.todos} />
			</div>
		)
	}
}


export default TodoApp