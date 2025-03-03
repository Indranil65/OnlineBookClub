package com.cdac.books.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cdac.books.models.Genres;
import com.cdac.books.repositories.IGenresRepository;
import com.cdac.utils.response.R;

import java.util.List;

@RestController
@RequestMapping("/api/genres")

@CrossOrigin("*")
public class GenresController {
	private static final Logger logger = LoggerFactory.getLogger(GenresController.class);

	@Autowired
	IGenresRepository genresRepository;

	@GetMapping("")
	@ResponseBody
	public R<List<Genres>> findGenres() {
		List<Genres> genresList = null;
		try {
			genresList = genresRepository.findAll();

		} catch (Exception e) {
			logger.error("Find the genres list fails:" + e.getMessage());
		}

		return new R<List<Genres>>().success().data(genresList);
	}

}
