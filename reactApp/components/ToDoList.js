import React from 'react';
import ReactDOM from 'react-dom';

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



export default ToDoList