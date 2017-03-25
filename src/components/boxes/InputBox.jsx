var React = require('react');
var ImputItem = require('../items/InputItem.jsx');
var ResultsBox = require('./ResultsBox.jsx');

var InputBox = React.createClass({
	getInitialState: function(){
		return{
				button_title: "Agregar",
				items: []
			};
	},

	// Se ejecuta antes de cargar el render
	componentWillMount: function(){
		console.log("WillMount");
	},

	componentDidMount: function(){
		console.log("DidMount");
	},
	onClick: function(event){
		console.log(this.state.items.concat(this.refs.input_task.getValue()));
		if(this.refs.input_task.getValue() == ''){

		}else{
			this.setState({
				items: this.state.items.concat(this.refs.input_task.getValue())
			});
		}
		
	},

	render: function(){
		return(
			<div className="row">
				<div className="col-md-12">
				<ImputItem ref="input_task"/>
				<button id="my-btn" type="button" className="btn btn-success" onClick={this.onClick}>{this.state.button_title}</button><br/>
				</div>
				<label>OK</label>
				<ResultsBox items={this.state.items}/>
			</div>
		);
	}
});

module.exports = InputBox;