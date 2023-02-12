// let domainUrl = process.env.REACT_APP_API_BASE_URL;

// const mainApi = {
//   GET: (link) =>
//     new Promise(async (resolve, reject) => {
//       const token = localStorage.getItem("authToken");

//       let url = domainUrl + link;

//       fetch(url, {
//         method: "GET",
//         headers: {
//           Authorization: token ? `jwt ${token}` : "",
//         },
//       })
//         .then((response) => {
//           if (response.status === 401) {
//             window.location.pathname = "/login";
//           }
//           return response.json();
//         })
//         .then((responseText) => {
//           resolve(responseText);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     }),

//   POST: (link, data) =>
//     new Promise(async (resolve, reject) => {
//       const token = localStorage.getItem("authToken");

//       let url = domainUrl + link;

//       fetch(url, {
//         body: JSON.stringify(data),
//         method: "POST",
//         headers: {
//           Authorization: token ? `jwt ${token}` : "",
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => {
//           if (response.status === 401) {
//             window.location.pathname = "/login";
//           }

//           return response.json();
//         })
//         .then((responseText) => {
//           resolve(responseText);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     }),

//   PUT: (link, data) =>
//     new Promise(async (resolve, reject) => {
//       const token = localStorage.getItem("authToken");
//       const url = domainUrl + link;

//       fetch(url, {
//         body: JSON.stringify(data),
//         method: "PUT",
//         headers: {
//           Authorization: token ? `jwt ${token}` : "",
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => {
//           if (response.status === 401) {
//             window.location.pathname = "/login";
//           }
//           return response.json();
//         })
//         .then((responseText) => {
//           resolve(responseText);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     }),

//   DELETE: (link, data) =>
//     new Promise(async (resolve, reject) => {
//       const token = localStorage.getItem("authToken");
//       const url = domainUrl + link;

//       fetch(url, {
//         body: JSON.stringify(data),
//         method: "DELETE",
//         headers: {
//           Authorization: token ? `jwt ${token}` : "",
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => {
//           if (response.status === 401) {
//             window.location.pathname = "/login";
//           }
//           return response.json();
//         })
//         .then((responseText) => {
//           resolve(responseText);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     }),

//   PATCH: (link, data) =>
//     new Promise(async (resolve, reject) => {
//       const token = localStorage.getItem("authToken");
//       const url = domainUrl + link;

//       fetch(url, {
//         body: JSON.stringify(data),
//         method: "PATCH",
//         headers: {
//           Authorization: token ? `jwt ${token}` : "",
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => {
//           if (response.status === 401) {
//             window.location.pathname = "/login";
//           }
//           return response.json();
//         })
//         .then((responseText) => {
//           resolve(responseText);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     }),
// };

// export default mainApi;
// import { Constants } from "./constant";

let domainUrl = "https://notes-backend-dkpt.onrender.com/api";

export default {
  GET: (link) =>
    new Promise(async (resolve, reject) => {
      const url = domainUrl + link;

      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  POST: (link, data, qs) =>
    new Promise(async (resolve, reject) => {
      // console.log(data);
      const url = domainUrl + link;
      fetch(url, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
          // console.log(responseText);
        })
        .catch((error) => {
          reject(error);
        });
      // console.log(data);
    }),

  PUT: (link, data, qs) =>
    new Promise(async (resolve, reject) => {
      // console.log(data);
      const url = domainUrl + link;
      fetch(url, {
        body: JSON.stringify(data),
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    }),
  // delete mate mare ahi bana vani thase..  aa jovi padse kem ke aa khoti che..  aavu koi hoy nai ama aapde put nuj use karvanu thase..
  // DELETE: (link, data) =>
  //   new Promise(async (resolve, reject) => {
  //     const url = domainUrl + link;
  //     fetch(url, {
  //       body: JSON.stringify(data),
  //       method: "DELETE",
  //       headers: { "content-type": "application/json" },
  //     })
  //       .then((response) => response.json())
  //       .then((responseText) => {
  //         resolve(responseText);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   }),
};

// get: (link) => {   url ane method ma get karvau.. pachhi fetch karavani..
//   new Promise(async (resolve, reject) => {
//     const url = mainurl + link;
//     fetch(url, {    // ahi eni body banava mate aa karvanu..
//       method: "get",
//     })
//       .then((res) => res.json())
//       .then((re) => {
//         resolve(re);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// post: (link, data) => {
//   new Promise(async (resolve, reject) => {
//     const url = domainUrl + link;
//     fetch(url, {
//       body: json.stringify(data),
//       method: "post",
//       headers: {
//         "content-type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((re) => resolve(re))
//       .catch((error) => reject(error));
//   });
// };
