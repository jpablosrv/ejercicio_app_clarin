const initialState = [
    { favId: 1, dateFav: 1597195523942 }
]

const AGREGAR_FAVORITO ='AGREGAR_FAVORITO';

const appReducer = (state = initialState, action) => {
    
    switch (action) {
        case AGREGAR_FAVORITO:
            return [ ...state, action.payload ];

        default:
            return state;
    }
}

const agregarFavorito = (fav) => ({
    action: AGREGAR_FAVORITO,
    payload: fav
})