import AsyncStorage from "@react-native-community/async-storage"

const defaultState = {
    isLogin: false,
    token: ''
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case "USER_SIGNIN":
            return {
                ...state,
                isLogin: action.payload.login,
                token: action.payload.token
            }
        default:
            return state
    }
}