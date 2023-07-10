package com.examly.springapp.model;
import javax.persistence.*;

@Entity
@Table(name = "document")
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "documentId")
    private Long documentId;

    @Column(name = "documentName", nullable = false)
    private String documentName;

    @Column(name = "documentType", nullable = false)
    private String documentType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerId", nullable = false)
    private User customer;

    // Getters and setters, constructors
}
