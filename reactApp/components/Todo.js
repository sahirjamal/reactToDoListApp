import React from 'react';
import ReactDOM from 'react-dom';

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


export default Todo