import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ["sahir", "shridhar", "hello", "kill shridhar", "convince Lisa to watch GoT", 
				"bilbo baggins", "THE HOUSE IS ON FIRE", "oh man"];

class TodoList extends React.Component {
	render() {
		return (
				<div>
					<ul>
						{dummyData.map((task) => <Todo task={task} />)}
					</ul>
				</div>
		)
	}
}

class Todo extends React.Component {
	render() {
		return (
				<li>
					<input type="button" name="finishTask" value="X" /> {this.props.task}
				</li>
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

class TodoApp extends React.Component {
	render() {
		return(
			<div>
				<InputLine />
				<TodoList />
			</div>
		)
	}
}


ReactDOM.render(<TodoApp />,
	document.getElementById('root'));