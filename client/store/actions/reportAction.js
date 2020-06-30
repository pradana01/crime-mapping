const url = 'http://192.168.0.105:3000'

export function fetch_newsfeed(data){
    return (dispatch) => {
        fetch(`${url}/reports`, {
            headers: {
                access_token: data.token
            }
        })
        .then( res => res.json() )
        .then( hasil => {
            console.log(hasil)
            dispatch({
                type: 'FETCH_NEWSFEED',
                payload: {
                    newsfeed: hasil
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function fetch_report(data) {
    return (dispatch) => {
        fetch(`${url}/myReports`,{
            headers: {
                access_token: data.token
            }
        })
        .then(res => res.json())
        .then(hasil => {
            dispatch({
                type: 'FETCH_REPORT',
                payload: {
                    reports: hasil
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}
