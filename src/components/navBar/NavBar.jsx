var React = require('react');
var NavItem = require('./NavItem.jsx')


var NavBar = React.createClass({
	onClickHijo: function(event){
		alert("click desde el Hijo");
	},
	render: function(){
		return(
			<section className="bienvenidos navbar-fixed-top">
		<header className="encabezado">
			<div className="container">
				<div className="row flex-items-xs-middle">
					<div className="col-xs-12 col-md-3 text-xs-center logo">
						<a href="index.html">
							Logo
						</a>
					</div>
					<div className="col-xs-12 col-md-6 text-xs-center titulo">
						<h2>Lab Online</h2>
					</div>
					<div className="col-xs-6 offset-xs-3 offset-md-0 col-md-2 text-xs-center btn-salir">
						<div className="nav-item dropdown">
        					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          					Luis Pablo Salvay
        					</a>
        					<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          						<a className="dropdown-item" href="login.html"><i className="fa fa-sign-out" aria-hidden="true"></i> Salir</a>
          						<a className="dropdown-item" href="#"><i className="fa fa-lock" aria-hidden="true"></i> Cambiar Clave</a>
        					</div>
      					</div>
					</div>						
				</div>
				<div className="row">
					<div className="col-xs-12 text-xs-center">
						<nav className="navbar navbar-light nav-tabs">
						<button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#CollapsingNavbar" aria-controls="CollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation"></button>
  						<div className="collapse navbar-toggleable-md" id="CollapsingNavbar">
						  <ul className="nav navbar-nav">
						    <NavItem onClick={this.onClickHijo} />
						  </ul>
						 </div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	</section>

		);
	}
});

module.exports = NavBar;