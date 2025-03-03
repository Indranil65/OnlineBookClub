// import http from "./httpService";
// import { apiUrl } from "../config.json";

// const apiEndpoint = apiUrl + "/users";

// export function register(user) {
//   return http.post(apiEndpoint, {
//     email: user.username,
//     password: user.password,
//     name: user.name
//   });
// }
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users/add";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName
  });
}

