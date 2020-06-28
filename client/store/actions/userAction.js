import axios from 'axios'
const user_url = 'http://192.168.0.105:3000'
import AsyncStorage from '@react-native-community/async-storage'

export function userLogin(data) {
    console.log('isi data: ', data)
    return (dispatch) => {
        fetch(`${user_url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            }),
        })
        .then(res => res.json())
        .then( hasil => {
            dispatch({
                type: 'USER_SIGNIN',
                payload: {
                    login: true,
                    token: hasil.access_token
                }
            })
            AsyncStorage.setItem('token', hasil.access_token)
            console.log('hasil: ',hasil.access_token)
        })
        .catch(err => {
            console.log(err)
        })
    }
}




export function userLogout() {
    return {

    }
}