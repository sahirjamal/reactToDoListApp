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

class InputLine extends React.Component {
	render() {
		return (
			<div>
				<input type="text" name="addTask" value="" placeholder="Add a New Task..." />
				<input type="button" name="submitTask" value="Add!" />
			</div>
		)
	}
}

class TodoList extends React.Component {
	render() {
		return (
				<div>
					<ul>
						{this.props.todos.map((task) => <Todo task={task} />)}
					</ul>
				</div>
		)
	}
}

class Todo extends React.Component {

	render() {
		return (
				<li>
					<input type="button" name="finishTask" value="X" /> {(' ')}
					{this.props.task.completed ? <strike>{this.props.task.taskText}</strike> : this.props.task.taskText}
				</li>
		)
	}
}




ReactDOM.render(<TodoApp />,
	document.getElementById('root'));