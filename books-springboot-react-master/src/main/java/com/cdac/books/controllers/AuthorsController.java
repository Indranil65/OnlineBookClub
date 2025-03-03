package com.cdac.books.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cdac.books.models.Authors;
import com.cdac.books.repositories.IAuthorsRepository;
import com.cdac.utils.response.R;

import java.util.List;

@RestController
@RequestMapping("/api/authors")

@CrossOrigin("*")
public class AuthorsController {
	private static final Logger logger = LoggerFactory.getLogger(AuthorsController.class);

	@Autowired
	IAuthorsRepository authorsRepository;

	@PostMapping
	public R<Authors> addAuthor(@RequestBody Authors authors) {
		try {
			authorsRepository.save(authors);
		} catch (Exception e) {
			logger.error("Creates a new authors fails:" + e.getMessage());
		}

		return new R<Authors>().success();
	}

	@PutMapping("")
	public R<Authors> updateAuthor(
			@RequestBody Authors authors) {
		try {
			authorsRepository.save(authors);
		} catch (Exception e) {
			logger.error("Update an existing authors fails:" + e.getMessage());
		}

		return new R<Authors>().success();
	}

	@GetMapping("/{id}")
	public R<Authors> findAuthorById(@PathVariable String id) {
		Authors authors = null;
		try {
			authors = authorsRepository.findById(id).orElse(new Authors());
		} catch (Exception e) {
			logger.error("Retrieve an existing authors fails:" + e.getMessage());
		}

		return new R<Authors>().success().data(authors);
	}

	@DeleteMapping(value = "/{id}")
	public R<Authors> deleteAuthor(
			@RequestParam(value = "id") final String id) {
		try {
			authorsRepository.deleteById(id);
		} catch (Exception e) {
			logger.error("Delete an existing Author fails:" + e.getMessage());
		}

		return new R<Authors>().success();
	}

	@GetMapping("")
	@ResponseBody
	public R<List<Authors>> findAuthors() {
		List<Authors> authorsList = null;
		try {
			authorsList = authorsRepository.findAll();

		} catch (Exception e) {
			logger.error("Find the Author list fails:" + e.getMessage());
		}

		return new R<List<Authors>>().success().data(authorsList);
	}

}
