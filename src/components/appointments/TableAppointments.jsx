var React = require('react');
var RowAppointments = require('./RowAppointments.jsx');

var TableAppointments = React.createClass({
render: function(){

	return (<div className="row">
				<div className="col-xs-12 offset-xs-0 col-md-10 offset-md-1">
					<div className="table-responsive">
					<RowAppointments/>
					</div>
				</div>
			</div>
	);
}

});

module.exports = TableAppointments;