var React = require('react');
var NavBar = require('./navBar/NavBar.jsx');
var App = React.createClass({
	
render: function(){

	return (
		<div>
			<NavBar/>
			<p>Este es el Homes</p>
		</div>
	);
}

});

module.exports = App;