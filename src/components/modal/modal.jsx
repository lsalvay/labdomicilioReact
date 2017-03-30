var React = require('react');
var ReactDOM = require('react-dom');

var Modal = React.createClass({
        componentDidMount(){
            $(ReactDOM.findDOMNode(this)).modal('show');
            $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
        },
        render(){
          return (
              <div className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                      <p>Seguro quieres eliminar el turno?</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-primary">Aceptar</button>
                    </div>
                  </div>
                </div>
              </div>
            )
        },
        propTypes:{
          handleHideModal: React.PropTypes.func.isRequired
        }
    });

module.exports = Modal;