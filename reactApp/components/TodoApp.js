import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

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
		this.setState({todos: dummyData});
	}

	addTodo(task) {
		let array = this.state.todos;
		array.push({taskText: task, completed: false});
		this.setState({todos: array});
	}

	render() {
		return(
			<div>
				<InputLine submit={(task) => this.addTodo(task)}/>
				<TodoList todos={this.state.todos} />
			</div>
		)
	}
}


export default TodoApp