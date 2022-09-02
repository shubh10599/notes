let domainUrl = process.env.REACT_APP_API_BASE_URL;

const mainApi = {
  GET: (link) =>
    new Promise(async (resolve, reject) => {
      const token = localStorage.getItem("authToken");

      let url = domainUrl + link;

      fetch(url, {
        method: "GET",
        headers: {
          Authorization: token ? `jwt ${token}` : "",
        },
      })
        .then((response) => {
          if (response.status === 401) {
            window.location.pathname = "/login";
          }
          return response.json();
        })
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  POST: (link, data) =>
    new Promise(async (resolve, reject) => {
      const token = localStorage.getItem("authToken");

      let url = domainUrl + link;

      fetch(url, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          Authorization: token ? `jwt ${token}` : "",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 401) {
            window.location.pathname = "/login";
          }

          return response.json();
        })
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  PUT: (link, data) =>
    new Promise(async (resolve, reject) => {
      const token = localStorage.getItem("authToken");
      const url = domainUrl + link;

      fetch(url, {
        body: JSON.stringify(data),
        method: "PUT",
        headers: {
          Authorization: token ? `jwt ${token}` : "",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 401) {
            window.location.pathname = "/login";
          }
          return response.json();
        })
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  DELETE: (link, data) =>
    new Promise(async (resolve, reject) => {
      const token = localStorage.getItem("authToken");
      const url = domainUrl + link;

      fetch(url, {
        body: JSON.stringify(data),
        method: "DELETE",
        headers: {
          Authorization: token ? `jwt ${token}` : "",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 401) {
            window.location.pathname = "/login";
          }
          return response.json();
        })
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  PATCH: (link, data) =>
    new Promise(async (resolve, reject) => {
      const token = localStorage.getItem("authToken");
      const url = domainUrl + link;

      fetch(url, {
        body: JSON.stringify(data),
        method: "PATCH",
        headers: {
          Authorization: token ? `jwt ${token}` : "",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 401) {
            window.location.pathname = "/login";
          }
          return response.json();
        })
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    }),
};

export default mainApi;
