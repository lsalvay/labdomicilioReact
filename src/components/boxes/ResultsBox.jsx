var React = require('react');
var ResultsItem = require('../items/ResultsItem.jsx');

var ResultsBox = React.createClass({
	render: function(){
		return(
			<div className="row">
				<ul>
				{this.props.items.map(function(currentValue, index, array){
					return <ResultsItem name={currentValue} key={index}/>
				})}
				</ul>
			</div>
		);
	}
});

module.exports = ResultsBox;