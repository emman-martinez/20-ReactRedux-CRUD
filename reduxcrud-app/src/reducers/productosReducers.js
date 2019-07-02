/* *** Reducer: Recibe state y retorna nuevo state *** */
import { MOSTRAR_PRODUCTOS } from './../actions/types';


// Cada Reducer tiene su propio state
const initialState = {
    productos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_PRODUCTOS:
            return {
                ...state,
                productos: action.payload
            }
        default:
            return state;

    }
}