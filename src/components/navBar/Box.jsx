var React = require('react');
var pubsub = require('pubsub-js');

var Box = React.createClass({
	componentWillMount: function(){
		this.pubsub_event = pubsub.subscribe('listener', function(topic, items){
		console.log(topic, items);
		});
	},
	componentWillUnMount: function(){
		pubsub.unsubscribe(this.pubsub_event);
	},
	onEventReceived: function(){
		conslole.log("Mensaje Recibido desde otro componente.")
	},
	render: function(){
		return(
				<div>Soy el componento que no tiene hijo</div>
			);		
	}
});

module.exports = Box;