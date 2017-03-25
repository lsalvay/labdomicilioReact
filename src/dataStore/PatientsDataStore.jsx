var Reflux = require('reflux');
var PatientsActions = require('../actions/PatientsActions.jsx');
var $ = require('jquery');

var PatientsDataStore = Reflux.createStore({
	urlPatients: 'http://localhost:3001/api/patients',
	listenables: [PatientsActions],
	patientsList: [],
	getPatients: function(){
		$.ajax({
			url: this.urlPatients,
			cahe: false,
			context: this,
			success: function(data){
				console.log(data);
				this.trigger('onresolve', data.patients);
			
			}.bind(this)
		})
	},
});

module.exports = PatientsDataStore;