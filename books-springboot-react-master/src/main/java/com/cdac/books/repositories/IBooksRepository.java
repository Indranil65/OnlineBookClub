package com.cdac.books.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.books.models.Books;

public interface IBooksRepository extends JpaRepository<Books, String> {

}
