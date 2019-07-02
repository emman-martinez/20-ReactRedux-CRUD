import React , { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { mostrarProductos } from './../actions/productosActions';

class Productos extends Component {

    componentDidMount() {
        this.props.mostrarProductos();
    }

    render() {
        return(
            <h1>Desde Componente Productos.js</h1>
        );
    }
}

// state
const mapStateToProps = state => ({
    productos: state.productos.productos // state.productosReducers.index(reducers)
})

export default connect(mapStateToProps, { mostrarProductos }) (Productos);
