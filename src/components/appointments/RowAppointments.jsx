var React = require('react');
var Reflux = require('reflux');
var AppointmentsDataStore = require('../../dataStore/AppointmentsDataStore.jsx');


var RowAppointments = React.createClass({
	mixins: [Reflux.listenTo(AppointmentsDataStore, 'onResult')],

	getInitialState: function(){
			return{
					listaAppointments: []
			};
	},
	componentWillMount: function(){
		AppointmentsDataStore.getAppointments();	
	},
	onResult: function(event, items){
		this.setState({
			listaAppointments: items
		})

	},
	onEdit: function(event){
		console.log('click en editar');
	},
	onDelete: function(event){
		console.log('click en eliminar');
	},

    render: function() {
        return (
        		<table className="table table-hover">
        			<thead>
						<tr className="table-total">
					    	<th>Día</th>
					    	<th>Hora</th>
					    	<th>Especialidad</th>
					    	<th>Paciente</th>
					    	<th>Usuario</th>
					    	<th>Editar</th>
					    	<th>Eliminar</th>
					    </tr>
					</thead>
					<tbody>
		                {this.state.listaAppointments.map(function(valor, index, array){
							return <tr key={index}>
								<td key={valor.day}>
								{valor.day}
								</td>
								<td key={valor.hour}>
								{valor.hour}
								</td>
								<td key={valor.specialty}>
								{valor.specialty}
								</td>
								<td key={valor.patient}>
								{valor.patient}
								</td>
								<td key={valor.user}>
								{valor.user}
								</td>
								<td><a href="#" onClick={this.onEdit} data-toggle="modal" data-target="#mensajeModal"><i className="fa fa-pencil" aria-hidden="true"></i></a></td>
					      		<td><a href="#" onClick={this.onDelete}><i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
							</tr>;
						}.bind(this))}
					</tbody>
				</table>
        );
    }
});

module.exports = RowAppointments;