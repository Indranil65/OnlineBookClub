// import React from "react";
// import Joi from "joi-browser";
// import Form from "./common/Form";
// import * as userService from "../services/userService";
// import auth from "../services/authService";

// class RegisterForm extends Form {
//   state = {
//     data: { username: "", password: "", name: "" },
//     errors: {}
//   };

//   schema = {
//     username: Joi.string()
//       .required()
//       .email()
//       .label("Username"),
//     password: Joi.string()
//       .required()
//       .min(5)
//       .label("Password"),
//     name: Joi.string()
//       .required()
//       .label("Name")
//   };

//   doSubmit = async () => {
//     try {
//       const response = await userService.register(this.state.data);
//       auth.loginWithJwt(response.headers["x-auth-token"]);
//       window.location = "/";
//     } catch (ex) {
//       if (ex.response && ex.response.status === 400) {
//         const errors = { ...this.state.errors };
//         errors.username = ex.response.data;
//         this.setState({ errors });
//       }
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>Register</h1>
//         <form onSubmit={this.handleSubmit}>
//           {this.renderInput("username", "Username")}
//           {this.renderInput("password", "Password", "password")}
//           {this.renderInput("name", "Name")}
//           {this.renderButton("Register")}
//         </form>
//       </div>
//     );
//   }
// }

// export default RegisterForm;

import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", firstName: "", lastName: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    firstName: Joi.string()
      .allow(null, '') // Allows null or empty string
      .label("First Name"),
    lastName: Joi.string()
      .allow(null, '') // Allows null or empty string
      .label("Last Name")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

