var React = require('react');
var Modal = require('../modal/Modal.jsx');
var Reflux = require('reflux');
var AppointmentsDataStore = require('../../dataStore/AppointmentsDataStore.jsx');


var RowAppointments = React.createClass({
	mixins: [Reflux.listenTo(AppointmentsDataStore, 'onResult')],

	getInitialState: function(){
			return{
					listaAppointments: [],
					view: {showModal: false}

			};
	},
	handleHideModal: function(){
        	this.setState({view: {showModal: false}})
        },
	handleShowModal: function(){
        	this.setState({view: {showModal: true}})
        },	
	componentWillMount: function(){
		AppointmentsDataStore.getAppointments();	
	},
	onResult: function(event, items){
		this.setState({
			listaAppointments: items
		})

	},
	onEdit: function(valor){
		console.log('Editar:' + valor);
	},
	onDelete: function(valor){
		AppointmentsDataStore.deleteAppointment(valor._id);
		const newState = this.state.listaAppointments;
    	if (newState.indexOf(valor) > -1) {
      	newState.splice(newState.indexOf(valor), 1);
      	this.setState({listaAppointments: newState})
      }
	},

    render: function() {
        return (
        	<div>
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
								<td><a href="#" onClick={this.onEdit.bind(this, valor), this.handleShowModal} data-toggle="modal" data-target="#mensajeModal"><i className="fa fa-pencil" aria-hidden="true"></i></a></td>
					      		<td><a href="#" onClick={this.onDelete.bind(this, valor), this.handleShowModal}><i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
					      	</tr>;
						}.bind(this))}
					</tbody>
				</table>
				<div className="row">
            	{this.state.view.showModal ? <Modal handleHideModal={this.handleHideModal}/> : null}
        	</div>
        	</div>
        );
    }
});


module.exports = RowAppointments;