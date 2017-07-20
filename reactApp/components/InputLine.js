import React from 'react';
import ReactDOM from 'react-dom';

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


export default InputLine