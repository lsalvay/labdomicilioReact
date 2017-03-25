var React = require('react');

var ResultsItem = React.createClass({
	render: function(){
		return(
			<li>{this.props.name}</li>
		);
	}
});

module.exports = ResultsItem;