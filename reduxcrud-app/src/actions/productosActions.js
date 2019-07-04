import { MOSTRAR_PRODUCTOS, MOSTRAR_PRODUCTO, AGREGAR_PRODUCTO, EDITAR_PRODUCTO, ELIMINAR_PRODUCTO } from './types';
import axios from 'axios';

export const mostrarProductos = () => async dispatch => {
    const respuesta = await axios.get('https://my-json-server.typicode.com/emasesosos/20-ReactRedux-CRUD/productos');
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}

export const mostrarProducto = (id) => async dispatch => {
    const respuesta = await axios.get(`https://my-json-server.typicode.com/emasesosos/20-ReactRedux-CRUD/productos/${id}`);
    dispatch({
        type: MOSTRAR_PRODUCTO,
        payload: respuesta.data
    })
}

export const borrarProducto = (id) => async dispatch => {
    await axios.delete(`https://my-json-server.typicode.com/emasesosos/20-ReactRedux-CRUD/productos/${id}`);
    dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id
    })
}

export const agregarProducto = (producto) => async dispatch => {
    const respuesta = await axios.post('https://my-json-server.typicode.com/emasesosos/20-ReactRedux-CRUD/productos', producto);
    dispatch({
        type: AGREGAR_PRODUCTO,
        payload: respuesta.data
    })
}

export const editarProducto = (producto) => async dispatch => {
    const respuesta = await axios.put(`https://my-json-server.typicode.com/emasesosos/20-ReactRedux-CRUD/productos/${producto.id}`, producto);
    dispatch({
        type: EDITAR_PRODUCTO,
        payload: respuesta.data
    })
}