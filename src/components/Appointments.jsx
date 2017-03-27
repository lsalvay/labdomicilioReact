var React = require('react');
var NavBar = require('./navBar/NavBar.jsx');
var TableAppointments = require('./appointments/TableAppointments.jsx');
var AppointmentsActions = require ( '../actions/AppointmentsActions.jsx' );

setInterval ( function () {
    AppointmentsActions.getAppointments (); 
		}, 5000);	

var Appointments = React.createClass({
	
render: function(){

	return (
		<div>
			<h1>Esto es Turnos</h1>	
		<NavBar/>
		<TableAppointments/>
		</div>
	);
}

});

module.exports = Appointments;