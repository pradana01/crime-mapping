const defaultState = {
    isLogin: false,
    token: '',
    message: ''
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case "USER_SIGNUP":
            return {
                ...state,
                message: action.payload.message
            }
        case "USER_SIGNIN":
            return {
                ...state,
                isLogin: action.payload.login,
                token: action.payload.token
            }
        case "USER_LOGOUT":
            return {
                ...state,
                isLogin: action.payload.login,
                token: action.payload.token
            }
        default:
            return state
    }
}