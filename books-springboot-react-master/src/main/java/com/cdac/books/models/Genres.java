package com.cdac.books.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter

public class Genres {

    @Id
    private String id;

    private String name;

    public Genres(String id, String name) {
        this.id = id;

        this.name = name;
    }

    public Genres() {
    }

}
