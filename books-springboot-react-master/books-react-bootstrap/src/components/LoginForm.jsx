// import React from "react";
// import { Redirect } from "react-router-dom";
// import Joi from "joi-browser";
// import Form from "./common/Form";
// import auth from "../services/authService";

// class LoginForm extends Form {
//   state = {
//     data: { username: "", password: "" },
//     errors: {}
//   };

//   schema = {
//     username: Joi.string()
//       .required()
//       .label("Username"),
//     password: Joi.string()
//       .required()
//       .label("Password")
//   };

//   doSubmit = async () => {
//     try {
//       const { data } = this.state;
//       await auth.login(data.username, data.password);

//       const { state } = this.props.location;
//       window.location = state ? state.from.pathname : "/";
//     } catch (ex) {
//       if (ex.response && ex.response.status === 400) {
//         const errors = { ...this.state.errors };
//         errors.username = ex.response.data;
//         this.setState({ errors });
//       }
//     }
//   };

//   render() {
//     if (auth.getCurrentUser()) return <Redirect to="/" />;

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           {this.renderInput("username", "Username")}
//           {this.renderInput("password", "Password", "password")}
//           {this.renderButton("Login")}
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;


// import React from "react";
// import { Redirect } from "react-router-dom";
// import Joi from "joi-browser";
// import Form from "./common/Form";
// import auth from "../services/authService";

// class LoginForm extends Form {
//   state = {
//     data: { email: "", password: "" },
//     errors: {}
//   };

//   schema = {
//     email: Joi.string()
//       .required()
//       .email()
//       .label("Email"),
//     password: Joi.string()
//       .required()
//       .label("Password")
//   };

//   doSubmit = async () => {
//     try {
//       const { data } = this.state;
//       await auth.login(data.email, data.password);

//       // Redirecting to /books after successful login
//       window.location = "/";
//     } catch (ex) {
//       if (ex.response && ex.response.status === 400) {
//         const errors = { ...this.state.errors };
//         errors.email = ex.response.data;
//         this.setState({ errors });
//       }
//     }
//   };

//   render() {
//     if (auth.getCurrentUser()) return <Redirect to="/" />;

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           {this.renderInput("email", "Email")}
//           {this.renderInput("password", "Password", "password")}
//           {this.renderButton("Login")}
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

/*
import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/Form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  // doSubmit = async () => {
  //   try {
  //     const { data } = this.state;
  //     await auth.login(data.email, data.password);
  //     const { state } = this.props.location;
  //     window.location = state ? state.from.pathname : "/";
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 400) {
  //       const errors = { ...this.state.errors };
  //       errors.username = ex.response.data;
  //       this.setState({ errors });
  //     }
  //   }
  // };


  doSubmit = async () => {
    try {
      const { data } = this.state;
      //const response = await auth.login(data.email, data.password);
      const  = await fetch('http://localhost:8088/api/users/auth')

      if (response === 1) {
        const { state } = this.props.location;
        window.location = state ? state.from.pathname : "/";
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        const errors = { ...this.state.errors };
        errors.email = "Wrong email or password!";
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm; */

// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { authService } from '../services/authService ';
// import '../styles/Login.css';

// const Login = () => {

//   const history = useNavigate();  // Object to navigate from one component to another
//   const usernameInputRef = useRef(null); // Create a ref to the Username input field

//   // defining state
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   // Use the useEffect hook to set focus on the input field when the component mounts
//   useEffect(() => {
//     // Check if the ref exists before setting focus
//     if (usernameInputRef.current) {
//       usernameInputRef.current.focus();
//     }
//   }, []);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       setErrorMessage('Please enter both email and password.');
//       return;
//     }

//     const User = {
//       email,
//       password
//     };

//     /*await is usually used to unwrap promises by passing a Promise as the expression. 
//   Using await pauses the execution of its surrounding async function until the promise is 
//   settled (that is, fulfilled or rejected).
//   When execution resumes, the value of the await expression becomes that of the 
//   fulfilled promise.

//   The Promise object represents the eventual completion (or failure) of an asynchronous 
//   operation and its resulting value
//      */
//     try {
//       const loginSuccess = await authService.login(User);
//       console.log('API response:', loginSuccess.data); // Add this line

//       if (loginSuccess) {
//         setSuccessMessage('Login successful. Redirecting...');
//         authService.registerSuccessfulLogin(email);
//         setTimeout(() => {

//           history('/books'); // navigates to products Component

//         }, 2000);
//       } else {
//         setErrorMessage('Invalid email or password.');
//       }
//     } catch (error) {
//       console.error('Login error', error);
//       setErrorMessage('User doesnot Exist.');
//     }

//   };

//   return (
//     <div>
//       <br /> <br />
//       <div className="container">

//         <h2 style={{ color: 'green' }}>Login</h2>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}
//             ref={usernameInputRef} // Attach the ref to the input element
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button className="btn btn-primary" onClick={handleLogin}>Login</button>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}

//       </div>
//     </div>
//   )
// }

// export default Login

/*
import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";
import Form from "./common/Form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;

      // Make API call to authenticate user
      const response = await axios.post("http://localhost:8088/users/auth", {
        email: data.email,
        password: data.password
      });

      if (response.data === 1) {
        // Redirect to home page
        const { state } = this.props.location;
        window.location = state ? state.from.pathname : "/";
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        const errors = { ...this.state.errors };
        errors.email = "Wrong email or password!";
        this.setState({ errors });
      } else {
        console.error("Login error:", ex);
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
        {this.state.errors.email && (
          <p style={{ color: "red" }}>{this.state.errors.email}</p>
        )}
      </div>
    );
  }
}

export default LoginForm;

*/


// import React from "react";
// import { Redirect } from "react-router-dom";
// import Joi from "joi-browser";
// import axios from "axios";
// import Form from "./common/Form";

// class LoginForm extends Form {
//   state = {
//     data: { email: "", password: "" },
//     errors: {},
//     isAuthenticated: false, // Track authentication state
//   };

//   schema = {
//     email: Joi.string().required().email().label("Email"),
//     password: Joi.string().required().label("Password"),
//   };

//   doSubmit = async () => {
//     try {
//       const { data } = this.state;

//       // Make API call to authenticate user
//       const response = await axios.post("http://localhost:8088/api/users/auth", {
//         email: data.email,
//         password: data.password,
//       });

//       if (response.data === 0) {
//         this.setState({ isAuthenticated: true, errors: {} }); // Clear errors and set authentication
//       } else {
//         this.setState({ errors: { email: "Incorrect password or username" } });
//       }
//     } catch (ex) {
//       this.setState({ errors: { email: "Incorrect password or username" } });
//     }
//   };

//   render() {
//     if (this.state.isAuthenticated) {
//       return <Redirect to="/" />;
//     }

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           {this.renderInput("email", "Email")}
//           {this.renderInput("password", "Password", "password")}
//           {this.renderButton("Login")}
//         </form>
//         {this.state.errors.email && (
//           <p style={{ color: "red" }}>{this.state.errors.email}</p>
//         )}
//       </div>
//     );
//   }
// }

// export default LoginForm;
import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";
import Form from "./common/Form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
    isAuthenticated: false,
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;

      // Log API request for debugging
      console.log("Sending login request:", data);

      const response = await axios.post("http://localhost:8088/api/users/auth", data);

      console.log("API response:", response.data); // ✅ Debugging

      if (response.data === 1) {
        this.setState({ isAuthenticated: true, errors: {} });
      } else {
        this.setState({ errors: { email: "Incorrect password or username" } });
      }
    } catch (ex) {
      console.error("API Error:", ex);
      this.setState({ errors: { email: "Incorrect password or username" } });
    }
  };

  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
        {this.state.errors.email && (
          <p style={{ color: "red" }}>{this.state.errors.email}</p>
        )}
      </div>
    );
  }
}

export default LoginForm;
