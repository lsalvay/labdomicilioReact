var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.jsx');
var Appointments = require('./components/Appointments.jsx');
var Patients = require('./components/Patients.jsx');
var { Router, Route, IndexRoute, Link, browserHistory } = require('react-router');

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/Appointments" component={Appointments} />
		<Route path="/Patients" component={Patients} />
	</Router>
	), document.getElementById('main'));

