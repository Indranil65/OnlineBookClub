package com.cdac.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.books.models.Genres;

public interface IGenresRepository extends JpaRepository<Genres, String> {

}
