var React = require('react');
var pubsub = require('pubsub-js');
var NavItem = React.createClass({
	onClick: function(event){
		this.props.onClick(event);
		pubsub.publish('listener', true);
	},
	render: function(){
		return(
				<li className="nav-item">
					<a className="nav-link" href="#" onClick={this.onClick}>{this.props.name}</a>
				</li>
			);		
	}
});

module.exports = NavItem;