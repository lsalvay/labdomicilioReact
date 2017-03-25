var React = require('react');
var Reflux = require('reflux');
var PatientsDataStore = require('../../dataStore/PatientsDataStore.jsx');


var RowPatients = React.createClass({
	mixins: [Reflux.listenTo(PatientsDataStore, 'onResult')],

	getInitialState: function(){
			return{
					lista: []
			};
	},
	componentWillMount: function(){
		PatientsDataStore.getPatients();	
	},
	onResult: function(event, items){
		this.setState({
			lista: items
		})

	},

    render: function() {
        return (
        		<table className="table table-hover">
        			<thead>
						<tr className="table-total">
					    	<th>DNI</th>
					    	<th>Nombre</th>
					    	<th>Apellido</th>
					    	<th>Email</th>
					    	<th>Teléfono</th>
					    </tr>
					</thead>
					<tbody>
		                {this.state.lista.map(function(valor, index, array){
							return <tr key={index}>
								<td key={valor.dni}>
								{valor.dni}
								</td>
								<td key={valor.name}>
								{valor.name}
								</td>
								<td key={valor.lastName}>
								{valor.lastName}
								</td>
								<td key={valor.email}>
								{valor.email}
								</td>
								<td key={valor.phone}>
								{valor.phone}
								</td>
							</tr>;
						}.bind(this))}
					</tbody>
				</table>
        );
    }
});

module.exports = RowPatients;