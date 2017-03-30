var Reflux = require('reflux');
var AppointmentsActions = require('../actions/AppointmentsActions.jsx');
var $ = require('jquery');

var AppointmentsDataStore = Reflux.createStore({
	urlAppointments: 'http://localhost:3001/api/appointments',
	deleteAppointment: 'http://localhost:3001/api/appointment/',
	listenables: [AppointmentsActions],
	appointmentsList: [],
	getAppointments: function(){
		$.ajax({
			url: this.urlAppointments,
			cahe: false,
			context: this,
			success: function(data){
				console.log(data);
				this.trigger('onResolve', data.appointments);
			
			}.bind(this)
		})
	},
	deleteAppointment: function(id){
		$.ajax({
			url: 'http://localhost:3001/api/appointment/' + id,
			type: 'DELETE',
			cahe: false,
			context: this,
			success: function(data){
				console.log('Eliminado');
			
			}.bind(this)
		})
	}

});

module.exports = AppointmentsDataStore;