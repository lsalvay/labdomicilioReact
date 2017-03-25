var React = require('react');
var RowPatients = require('./RowPatients.jsx');

var TablePatients = React.createClass({
render: function(){

	return (<div className="row">
				<div className="col-xs-12 offset-xs-0 col-md-10 offset-md-1">
					<div className="table-responsive">
					<RowPatients/>
					</div>
				</div>
			</div>
	);
}

});

module.exports = TablePatients;