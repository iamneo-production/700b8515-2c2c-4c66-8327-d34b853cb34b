package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.repo.UserRepository;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.model.NotFoundException;
import com.examly.springapp.model.Policy;
import com.examly.springapp.model.PolicyModel;
import com.examly.springapp.repo.PolicyDataRepository;
import com.examly.springapp.repo.PolicyModelRepository;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class PolicyController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PolicyModelRepository policyModelRepository;

    @Autowired
    private PolicyDataRepository policyDataRepository;
    @PostMapping("/createpolicy")
    public PolicyModel testCreatePolicy(@RequestBody PolicyModel policyModel) {
        PolicyModel policy = new PolicyModel();

        // Set data from the request
        policy.setPolicyId(policyModel.getPolicyId());
        policy.setCoverageAmount(policyModel.getCoverageAmount());
        policy.setDescription(policyModel.getDescription());
        policy.setName(policyModel.getName());
        policy.setPremium(policyModel.getPremium());

        // Set created by (assuming the admin is logged in and you have the admin's email)
        String adminEmail = "admin@example.com"; // Replace this with the admin's email
        UserModel admin = userRepository.findByEmail(adminEmail);
        policy.setCreatedBy(admin);

        // Save the policy
        return policyModelRepository.save(policy);
    }

    @PostMapping("/addPolicy")
    @ResponseStatus(HttpStatus.OK)
    public Policy addPolicy(@RequestBody Policy data) {
        // Set the policyId to null to let JPA generate the value

        return policyDataRepository.save(data);
    }

    @GetMapping("/{policyId}")
    public PolicyModel getPolicy(@PathVariable Long policyId) {
        return policyModelRepository.findById(policyId)
                .orElseThrow(() -> new NotFoundException("Policy not found with ID: " + policyId));
    }

    @PutMapping("editPolicy/{policyId}")
    public PolicyModel editPolicy(@PathVariable Long policyId, @RequestBody PolicyModel data) {
        PolicyModel PolicyModel = policyModelRepository.findById(policyId)
                .orElseThrow(() -> new NotFoundException("Policy not found with ID: " + policyId));

        PolicyModel.setName(data.getName());
        PolicyModel.setDescription(data.getDescription());
        PolicyModel.setCoverageAmount(data.getCoverageAmount());
        PolicyModel.setPremium(data.getPremium());

        return policyModelRepository.save(PolicyModel);
    }

    @DeleteMapping("/delete/{policyId}")
    public void deletePolicy(@PathVariable Long policyId) {
        PolicyModel PolicyModel = policyModelRepository.findById(policyId)
                .orElseThrow(() -> new NotFoundException("Policy not found with ID: " + policyId));

        policyModelRepository.delete(PolicyModel);
    }

    @GetMapping("/getAllPolicy")
    public List<PolicyModel> getAllPolicies() {
        return policyModelRepository.findAll();
    }
}
