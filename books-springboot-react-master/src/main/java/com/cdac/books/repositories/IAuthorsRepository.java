package com.cdac.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.books.models.Authors;
import com.cdac.books.models.Books;

public interface IAuthorsRepository extends JpaRepository<Authors, String> {

}
