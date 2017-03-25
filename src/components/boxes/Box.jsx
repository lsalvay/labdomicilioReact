var React = require('react');
var InputBox = require('./InputBox.jsx');
var ResultsBox = require('./ResultsBox.jsx');


var Box = React.createClass({
	render: function(){
		return(
			<div className="container">
				<InputBox/>
			</div>
		);
	}
});

module.exports = Box;