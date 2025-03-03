package com.cdac.users.controllers;

import java.util.List;

import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cdac.users.models.User;
import com.cdac.users.repositories.IUserRepository;
import com.cdac.utils.response.R;

@RestController
@RequestMapping("/api/users")

@CrossOrigin("*")
public class UserController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	IUserRepository userRepository;

	@PostMapping("/add")

	public R<User> addUser(@RequestBody User user) {
		try {
			userRepository.save(user);
		} catch (Exception e) {
			logger.error("Creates a new user fails:" + e.getMessage());
		}

		return new R<User>().success();
	}

	@PutMapping("")
	public R<User> updateUser(@RequestBody User user) {
		try {
			userRepository.save(user);
		} catch (Exception e) {
			logger.error("Update an existing user fails:" + e.getMessage());
		}

		return new R<User>().success();
	}

	@GetMapping("/{email}")
	public R<User> findUserByEmail(@PathVariable String email) {
		User user = null;
		try {
			user = userRepository.findById(email).orElse(new User());
		} catch (Exception e) {
			logger.error("Retrieve an existing user fails:" + e.getMessage());
		}

		return new R<User>().success().data(user);
	}

	@DeleteMapping(value = "/{email}")
	public R<User> deleteUser(@RequestParam(value = "email") final String email) {
		try {
			userRepository.deleteById(email);
		} catch (Exception e) {
			logger.error("Delete an existing user fails:" + e.getMessage());
		}

		return new R<User>().success();
	}

	@GetMapping("")
	@ResponseBody
	public R<List<User>> findUsers() {
		List<User> userList = null;
		try {
			userList = userRepository.findAll();

		} catch (Exception e) {
			logger.error("Find the user list fails:" + e.getMessage());
		}

		return new R<List<User>>().success().data(userList);
	}

	// @PostMapping("/auth")
	// public int authenticateUser(@RequestBody Map<String, String> credentials) {
	// String username = credentials.get("username");
	// String password = credentials.get("password");
	//
	// return userRepository.findByEmailAndPassword(username, password).isPresent()
	// ? 1 : 0;
	// }

	@PostMapping("/auth")
	public int authenticateUser(@RequestBody User user) {
		Optional<User> existingUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
		return existingUser.isPresent() ? 1 : 0;
	}

}

// @CrossOrigin(origins="http://localhost:3000")
// @RestController
// @RequestMapping("/api")
// public class UserController {
//
// private final UserService dservice;
//
// public UserController(UserService dservice) {
// super();
// this.dservice = dservice;
// }
//
// //Open PostMan, make a POST Request -
// http://localhost:8086/producthive/api/register
// //Select body -> raw -> JSON
// //Insert JSON Dealer object.
// @PostMapping("/register")
// public ResponseEntity<String> createDealer(@Validated @RequestBody User
// user){
// try {
//
// User registeredUser=dservice.registerUser(user); //save dealer details
// if(registeredUser !=null) {
// return ResponseEntity.ok("Registration Successfull");
// }else {
// return ResponseEntity.badRequest().body("Registration Failed");
// }
// }catch(Exception e) {
// return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).
// body("An Error Occurred :"+e.getMessage());
// }
// }
//
//
// //Open PostMan, make a POST Request -
// http://localhost:8086/producthive/api/login
// //Select body -> raw -> JSON
// //Insert JSON Dealer object with email & password.
// @PostMapping("/login")
// public ResponseEntity<Boolean> loginUser(@Validated @RequestBody User user)
// throws CustomException
//
// {
// Boolean isLogin=false;
// String email = user.getEmail();
// String password = user.getPassword();
//
// User d= dservice.loginDealer(email).orElseThrow(() -> //Invokes loginDealer()
// method with email parameter
// new CustomException("User doen't Exists :: " +email));
//
// if(email.equals(d.getEmail()) && password.equals(d.getPassword())) {
// isLogin=true;
// }
// return ResponseEntity.ok(isLogin);
// }
//
//
//// @GetMapping("/users")
//// public ResponseEntity<List<DealerAndAddressProjection>> getDealerInfo(){
//// try {
//// List<DealerAndAddressProjection> selectedFields=dservice.getDealerInfo();
////
//// return ResponseEntity.ok(selectedFields);
//// }catch(Exception e) {
//// e.printStackTrace();
////
//// return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//// }
//// }
//
//
//
// //Open PostMan/Browser, make a GET Request -
// http://localhost:8086/producthive/api/products
// @GetMapping("/users")
// public ResponseEntity<List<User>> displayAllProducts() {
//
// try {
// List<User> users=dservice.listAll();//Invoke listAll() service method
// return ResponseEntity.ok(users);
// }
// catch(Exception e) {
// e.printStackTrace();
// return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
// }
//
// }
//
//
// }
//
//
//
