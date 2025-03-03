package com.cdac.books.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter

public class Books {

    @Id
    private String id;

    private String title;

    private String subtitle;

    private String type;

    private String format;

    private String releaseDate;

    private String author;

    private float price;

    private float publisherRRP;

    private int pages;

    private boolean isWishList;

    private String description;

    private String dimensions;

    private String ISBN;

    private String Publisher;

    public Books() {
    }

}
