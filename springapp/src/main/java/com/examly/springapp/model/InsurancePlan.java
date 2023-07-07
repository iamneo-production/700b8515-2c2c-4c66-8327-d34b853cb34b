package com.examly.springapp.model;
import javax.persistence.*;

@Entity
@Table(name = "insuranceplan")
public class InsurancePlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "planID")
    private Long planId;

    @Column(name = "planName", nullable = false)
    private String planName;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "premiumAmount", nullable = false)
    private int premiumAmount;

    @Column(name = "coverageDetails", nullable = false)
    private String coverageDetails;

    // Getters and setters, constructors
}
