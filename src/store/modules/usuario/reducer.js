const initialState = {
    currentUser: null,
    error: null,
}

function usuario(state=initialState, action) {
    switch(action.type) {
        case '@usuario/LOGIN_SUCCESS':
            return {
                ...state,
                currentUser: action.user,
                error: null,
            };
        case '@usuario/LOGIN_FAILURE':
            return {
                ...state,
                error: action.error,
            };
        case '@usuario/REGISTER_FAILURE':
            return {
                ...state,
                error: action.error,
            };
        case '@usuario/LOG_OUT':
            return initialState;
        default:
            return state;
    }
}
export default usuario;