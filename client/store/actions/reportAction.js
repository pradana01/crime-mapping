const url = "https://crimeport-orchestrator.herokuapp.com";

export function fetch_newsfeed(data) {
  return (dispatch) => {
    fetch(`${url}/reports`, {
      headers: {
        access_token: data.token,
      },
    })
      .then((res) => res.json())
      .then((hasil) => {
        dispatch({
          type: "FETCH_NEWSFEED",
          payload: {
            newsfeed: hasil,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetch_report(data) {
  return (dispatch) => {
    fetch(`${url}/myReports`, {
      headers: {
        access_token: data.token,
      },
    })
      .then((res) => res.json())
      .then((hasil) => {
        dispatch({
          type: "FETCH_REPORT",
          payload: {
            reports: hasil,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function delete_report(data) {
  return (dispatch) => {
    fetch(`${url}/reports/${data.id}`, {
      method: "delete",
      headers: {
        access_token: data.token,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: "DELETE_REPORT",
          payload: {
            id: data.id,
          },
        });
        alert("report deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function add_report(data) {
  return (dispatch) => {
    fetch(`${url}/reports`, {
      method: "post",
      headers: {
        access_token: data.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        location: data.location,
        photo: data.photo,
      }),
    })
      .then((res) => res.json())
      .then((hasil) => {
        dispatch({
          type: "ADD_REPORT",
          payload: {
            reports: hasil,
          },
        });
        alert(`You've successfuly submitted a report`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function edit_report(data) {
  return (dispatch) => {
    fetch(`${url}/reports/${data.id}`, {
      method: "put",
      headers: {
        access_token: data.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        location: data.location,
        photo: data.photo,
      }),
    })
      .then((res) => res.json())
      .then((hasil) => {
        dispatch({
          type: "EDIT_REPORT",
          payload: {
            reports: hasil,
          },
        });
        alert(`You've successfuly edited the report`);
      })
      .catch((err) => {
        alert(err);
      });
  };
}
