package com.examly.springapp.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "policy")
public class PolicyData {
    @Id
    @Column(name = "policy_id")
    private String policyId;

    @Column(name = "policy_type")
    private String policytype;

    @Column(name = "applicant_name")
    private String applicantName;

    @Column(name = "applicant_address")
    private String applicantAddress;

    @Column(name = "applicant_mobile")
    private String applicantMobile;

    @Column(name = "applicant_email")
    private String applicantEmail;

    @Column(name = "vehicle_model")
    private String vehicleModel;

}
