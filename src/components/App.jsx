var React = require('react');
var NavBar = require('./navBar/NavBar.jsx');
var TablePatients = require('./patients/TablePatients.jsx');
var TableAppointments = require('./appointments/TableAppointments.jsx');
var AppointmentsActions = require ( '../actions/AppointmentsActions.jsx' );

setInterval ( function () {
    AppointmentsActions.getAppointments (); 
		}, 5000);	

var App = React.createClass({
	
render: function(){

	return (
		<div>
		<NavBar/>
		<TablePatients/>
		<TableAppointments/>
		</div>
	);
}

});

module.exports = App;