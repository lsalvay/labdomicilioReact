var React = require('react');

var InputItem = React.createClass({
	getInitialState: function(){
		return{
				value: ''
			};
	},

	onChange: function(event){
		this.setState({
			value: event.target.value
		});
	},
	getValue: function(){
		return this.state.value;
	},

	render: function(){
		return(
			
			<input type="text" onChange={this.onChange} value={this.state.value} />
		);
	}
});

module.exports = InputItem;