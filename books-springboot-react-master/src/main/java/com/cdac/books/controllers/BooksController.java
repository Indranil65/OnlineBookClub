package com.cdac.books.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cdac.books.models.Books;
import com.cdac.books.repositories.IBooksRepository;
import com.cdac.utils.response.R;

import java.util.List;

@RestController
@RequestMapping("/api/books")

@CrossOrigin("*")
public class BooksController {
	private static final Logger logger = LoggerFactory.getLogger(BooksController.class);

	@Autowired
	IBooksRepository booksRepository;

	@PostMapping
	public R<Books> addBook(@RequestBody Books books) {
		try {
			booksRepository.save(books);
		} catch (Exception e) {
			logger.error("Creates a new books fails:" + e.getMessage());
		}

		return new R<Books>().success();
	}

	@PutMapping("")
	public R<Books> updateBook(@RequestBody Books books) {
		try {
			booksRepository.save(books);
		} catch (Exception e) {
			logger.error("Update an existing books fails:" + e.getMessage());
		}

		return new R<Books>().success();
	}

	@GetMapping("/{id}")
	public R<Books> findBookById(@PathVariable String id) {
		Books books = null;
		try {
			books = booksRepository.findById(id).orElse(new Books());
		} catch (Exception e) {
			logger.error("Retrieve an existing books fails:" + e.getMessage());
		}

		return new R<Books>().success().data(books);
	}

	@DeleteMapping(value = "/{id}")
	public R<Books> deleteBook(
			@RequestParam(value = "id") final String id) {
		try {
			booksRepository.deleteById(id);
		} catch (Exception e) {
			logger.error("Delete an existing Book fails:" + e.getMessage());
		}

		return new R<Books>().success();
	}

	@GetMapping("")
	@ResponseBody
	public R<List<Books>> findBooks() {
		List<Books> booksList = null;
		try {
			booksList = booksRepository.findAll();

		} catch (Exception e) {
			logger.error("Find the Book list fails:" + e.getMessage());
		}

		return new R<List<Books>>().success().data(booksList);
	}

}
