var React = require('react');
var pubsub = require('pubsub-js');
var { Link } = require('react-router');

var NavItem = React.createClass({
	onClick: function(event){
		this.props.onClick(event);
		pubsub.publish('listener', true);
	},
	render: function(){
		return(
				<div>
				<li className="nav-item">
					<Link className="nav-link" to={'/'} onClick={this.onClick}>Home</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to={'/Appointments'} onClick={this.onClick}>Turnos</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to={'/Patients'} onClick={this.onClick}>Pacientes</Link>
				</li>
				</div>
			);		
	}
});

module.exports = NavItem;