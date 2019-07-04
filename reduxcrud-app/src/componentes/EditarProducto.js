import React , { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { mostrarProducto, editarProducto } from './../actions/productosActions';

class EditarProducto extends Component {

    // Forma de leer el formulario
    state = {
        nombre: '',
        precio: '',
        error: false
    }

    componentDidMount() {
        // console.log(this.props.match.params);
        const { id } = this.props.match.params;
        this.props.mostrarProducto(id);
        // console.log(this.props.producto);
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log(nextProps.producto);
        const { nombre, precio } = nextProps.producto;

        this.setState(
            {
                nombre,
                precio
            }
        );
    }

    nombreProducto = (e) => {
        console.log(e.target.value);
        this.setState(
            {
                nombre: e.target.value
            }
        )
    }

    precioProducto = (e) => {
        console.log(e.target.value);
        this.setState(
            {
                precio: e.target.value
            }
        )
    }

    actualizarProducto = (e) => {
        e.preventDefault();
        
        // Validando Formulario
        const { nombre, precio } = this.state;

        if(nombre === '' || precio === '') {
            this.setState(
                {
                    error: true
                }
            );
            return;
        } else {
            this.setState(
                {
                    error: false
                }
            )
        }

        // Tomar el ID
        const { id } = this.props.match.params;

        // Crear el objeto
        const infoProducto = {
            id,
            nombre,
            precio
        }
        console.log(infoProducto);

        // Actualizar el producto actual
        this.props.editarProducto(infoProducto);

        // Redireccionar a página principal
        this.props.history.push('/');
    }

    render() {
        const { nombre, precio, error } = this.state;

        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Editar Producto</h2>
                            <form onSubmit={this.actualizarProducto}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input defaultValue={nombre} onChange={this.nombreProducto} type="text" className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input defaultValue={precio} onChange={this.precioProducto} type="text" className="form-control" placeholder="Precio"/>
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                            </form>
                            { error ? 
                                <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div>
                                : 
                                ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    producto: state.productos.producto
})

export default connect(mapStateToProps, {mostrarProducto, editarProducto}) (EditarProducto);
