package com.examly.springapp.model;
import javax.persistence.*;

@Entity
@Table(name = "policy")
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "policyId")
    private Long policyId;

    @Column(name = "policyType", nullable = false)
    private String policyType;

    @Column(name = "applicantName", nullable = false)
    private String applicantName;

    @Column(name = "applicantAddress", nullable = false)
    private String applicantAddress;

    @Column(name = "applicantMobile", nullable = false)
    private String applicantMobile;

    @Column(name = "applicantEmail", nullable = false)
    private String applicantEmail;

    @Column(name = "applicantAadhaar", nullable = false)
    private String applicantAadhaar;

    @Column(name = "applicantPan", nullable = false)
    private String applicantPan;

    @Column(name = "applicantSalary", nullable = false)
    private String applicantSalary;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerId", nullable = false)
    private User customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "planID", nullable = false)
    private InsurancePlan plan;

    // Getters and setters, constructors
}
