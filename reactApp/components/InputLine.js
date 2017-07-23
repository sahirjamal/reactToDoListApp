import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
	constructor(props) {
		super(props),
		this.state = {
			typedText: "",
		}
	}

	handleTyping(event) {
		this.setState({typedText: event.target.value}) // set the textbox value to whatever is being currently typed
	}

	handleSubmit() {
		this.props.submit(this.state.typedText), // call submit function passed in from ToDoApp.js and set the typedText as input value
		this.setState({typedText: ""}) // reset the typed text to "" after the task has been submitted
	}

	render() {
		return (
			<div>
				<input type="text" name="addTask" placeholder="Add a New Task..." value={this.state.typedText} 
					onChange={(event) => this.handleTyping(event)} /* onChange is calling an event which changes the typeing
					and value is changing the text value to whatever is being typed */ />

				 <input type="button" name="submitTask" value="Add!" onClick={() => this.handleSubmit()}/>
			</div>
		)
	}
}

export default InputLine