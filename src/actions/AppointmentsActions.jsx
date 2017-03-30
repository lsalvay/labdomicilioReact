var Reflux = require('reflux');

var AppointmentsActions = Reflux.createActions([
		
		'getAppointments',
		'deleteAppointment',

	]);

module.exports = AppointmentsActions;