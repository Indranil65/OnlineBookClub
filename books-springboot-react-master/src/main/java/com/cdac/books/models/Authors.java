package com.cdac.books.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter

public class Authors {

    @Id
    private String id;

    private String fullName;

    private String type;

    private String born;

    private String yearsActive;

    private String books;

    private String description;

    public Authors() {
    }

}
