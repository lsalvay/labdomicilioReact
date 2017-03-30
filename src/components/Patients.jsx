var React = require('react');
var NavBar = require('./navBar/NavBar.jsx');
var TablePatients = require('./patients/TablePatients.jsx');
var PatientsActions = require ( '../actions/PatientsActions.jsx' );

// setInterval ( function () {
//     PatientsActions.getPatients (); 
// 		}, 5000);	

var Patients = React.createClass({
	
render: function(){

	return (
		<div>
			<h1>Esto es Pacientes</h1>	
		<NavBar/>
		<TablePatients/>
		</div>
	);
}

});

module.exports = Patients;