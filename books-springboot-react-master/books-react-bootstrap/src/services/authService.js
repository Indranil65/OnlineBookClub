// import jwtDecode from "jwt-decode";//this is wk
// import http from "./httpService";
// import { apiUrl } from "../config.json";

// const apiEndpoint = apiUrl + "/users";
// const tokenKey = "token";

// http.setJwt(getJwt());

// export async function login(email, password) {
//   const { data: jwt } = await http.post(apiEndpoint, { email, password });
//   localStorage.setItem(tokenKey, jwt);
// }

// export function loginWithJwt(jwt) {
//   localStorage.setItem(tokenKey, jwt);
// }

// export function logout() {
//   localStorage.removeItem(tokenKey);
// }

// export function getCurrentUser() {
//   try {
//     const jwt = localStorage.getItem(tokenKey);
//     return jwtDecode(jwt);
//   } catch (ex) {
//     return null;
//   }
// }

// export function getJwt() {
//   return localStorage.getItem(tokenKey);
// }

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   login,
//   loginWithJwt,
//   logout,
//   getCurrentUser,
//   getJwt
// };


import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users/add"; // Make sure this matches your backend's login endpoint
const tokenKey = "token";

// Set JWT token for all HTTP requests if available
http.setJwt(getJwt());

// Login function using email and password
export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  loginWithJwt(jwt); // Use helper to store JWT
}

// Helper function to store JWT in localStorage
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

// Logout function to remove JWT from localStorage
export function logout() {
  localStorage.removeItem(tokenKey);
}

// Get the current logged-in user's information
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwt ? jwtDecode(jwt) : null;
  } catch (ex) {
    return null;
  }
}

// Get JWT token directly from localStorage
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};


// import axios from "axios";

// /*
//   Axios, which is a popular library is mainly used to send asynchronous 
//   HTTP requests(GET,POST,PUT,DELETE) to REST endpoints. 
// This library is very useful to perform CRUD operations.
// This popular library is used to communicate with the backend. 
// Axios supports the Promise API, native to JS ES6.
// Using Axios we make API requests in our application. 
// Once the request is made we get the data in Return, and then we use this data in our React APPL. 

// > npm install axios

// */

// export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

// // Service class interacts with REST API
// export class AuthenticationService {

//   /*
//   The async function declaration creates a binding of a new async function to a 
//   given name. 
// The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior 
// to be written in a cleaner style and avoiding the need to explicitly configure promise chains.
// They are not coordinated with each other, meaning they could occur simultaneously or not 
// because they have their own separate agenda.   
// */

//   static async registerDealer(user) {
//     try {
//       const response = await axios.post('http://localhost:8088/api/register', user); // Adjust the API endpoint
//       return response.data;
//     } catch (error) {
//       console.error('Registration error', error);
//       throw new Error('An error occurred during registration.');
//     }
//   }

//   static async registerDealer1(user) {
//     return axios.post('http://localhost:8088/api/register', user);
//   }


//   static async login(user) {
//     try {
//       const response = await axios.post('http://localhost:8088/api/login', user);
//       console.log('SAPI response:', response.data + "Hello" + response.data.success);
//       if (response.data === true) { //Strict comparision equals operator - compares value & datatype
//         // Call the setSessionAttribute method to store the session token or user info
//         //  this.setSessionAttribute('sessionToken', response.data.sessionToken); // Adjust as needed
//         return true; // Return true for successful login
//       } else {
//         return false; // Return false for unsuccessful login
//       }
//     } catch (error) {
//       console.error('Login error', error);
//       throw new Error('An error occurred during login.');
//     }
//   }

//   // Service method to get RESTAPI of dealers Information
//   static async getDealerInfo() {
//     return axios.get('http://localhost:8088/api/users')
//       .then((response) => response.data)
//       .catch((error) => {
//         console.error("Error fetching dealer info:", error);
//         throw error;
//       });
//   }

//   // Session
//   /*
//  * A session is a group of user interactions with your website that take place 
//   within a given time frame. 
//  * For example a single session can contain multiple page views, events, 
//   social interactions, and ecommerce transactions.
 
//   Sessionstorage is a predefined Object, allows us to store data in key/value pairs in 
//   the browser.(Client Side) - Session Handling
//   The data which we save in session storage will only be persisted in the current browser tab. 
//   If we close the current tab or browser window, the saved data in session storage will be cleared.
//  * 
//    Session Handling in Server Side- JWT Tokens
//   */

//   /*Session Handling in Client Side using sessionStorage Object
//   */

//   static setSessionAttribute(key, value) {
//     localStorage.setItem(key, value); //store user info
//   }

//   // create a session data
//   static registerSuccessfulLogin(username) {
//     sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
//     console.log("First" + username);

//   }

//   static isUserLoggedIn() {
//     let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
//     if (user === null) return false;

//     return true;
//   }

//   static getLoggedInUserName() {
//     let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
//     if (user === null) return ''
//     return user
//   }

//   static logout() {

//     sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
//   }

// }