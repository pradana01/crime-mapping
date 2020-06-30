const user_url = "http://192.168.1.115:3000";

export function userLogin(data) {
  return (dispatch) => {
    fetch(`${user_url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((hasil) => {
        dispatch({
          type: "USER_SIGNIN",
          payload: {
            login: true,
            token: hasil.access_token,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function userLogout() {
  return (dispatch) => {
    dispatch({
      type: "USER_LOGOUT",
      payload: {
        login: false,
        payload: "",
      },
    });
  };
}

export function userSignUp(data) {
  return (dispatch) => {
    fetch(`${user_url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        username: data.username,
        location: data.location,
      }),
    })
      .then((res) => res.json())
      .then((hasil) => {
        dispatch({
          type: "USER_SIGNUP",
          payload: {
            message: "SignUp Success",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
