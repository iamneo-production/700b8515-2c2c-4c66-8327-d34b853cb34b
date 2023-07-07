<<<<<<< HEAD
package com.examly.springapp;

import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.File;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.examly.springapp.model.Policy;

@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {
	
	 @Autowired
	    private MockMvc mockMvc;

	 
	 Policy policy= new Policy(1L,"Type","name","address","mobile","email","12344","1345","2344");
	
	@Test
    public void testGetPolicyAll() throws Exception {
    	
        mockMvc.perform(get("/admin/policy"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andDo(print())
        .andExpect(content().contentType("application/json"))
			.andExpect(jsonPath("$").isArray())
			.andReturn();
    }
    
    @Test
    public void testCaseGetPolicyById() throws Exception {
    	
        mockMvc.perform(get("/admin/policy").param("id", "1"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andDo(print())
        .andExpect(content().contentType("application/json"))
			.andExpect(jsonPath("$").isArray())
			.andReturn();
    }
        
    
    @Test
    public void testCreatePolicy() throws Exception {
    
        mockMvc.perform(MockMvcRequestBuilders.post("/admin/policy")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(policy)))
                .andExpect(MockMvcResultMatchers.status().isCreated());

    }
    
    
    @Test
    public void test_case1() {
    String directoryPath = "src/main/java/com/examly/springapp/controller";
     File directory = new File(directoryPath);
     assertTrue(directory.exists() && directory.isDirectory());;
     }


   @Test
   public void test_case2() {
   String filePath = "src/main/java/com/examly/springapp/controller/PolicyController.java";
   File file = new File(filePath);
   assertTrue(file.exists() && file.isFile());;

    }
   
  
  private String asJsonString(Object object) throws JsonProcessingException {
      ObjectMapper objectMapper = new ObjectMapper();                                   
      return objectMapper.writeValueAsString(object);
  }

}
=======
package com.examly.springapp;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//import org.junit.Test;
import org.junit.jupiter.api.Test; 
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
class SpringappApplicationTests {

	@Autowired
    private MockMvc mockMvc;
	
	@Test
	@Transactional
    public void BE_spring_add_user() throws Exception {
        String newUser = "{\"email\":\"test@gmail.com\",\"password\":\"Test@123\",\"username\":\"test123\",\"mobileNumber\":\"9876543210\",\"userRole\":\"user\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/user/signup")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newUser)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_spring_add_policy() throws Exception {
        String newPolicy = "{\"policyId\":\"01\",\"policytype\":\"ABC\",\"applicantName\":\"ABC\",\"applicantAddress\":\"chennai\",\"applicantMobile\":\"9876543210\",\"applicantEmail\":\"abc@gmail.com\",\"VehicleModel\":\"356484\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/user/addPolicy")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newPolicy)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
	@Test
	@Transactional
    public void BE_spring_get_policy() throws Exception {
	 	mockMvc.perform(MockMvcRequestBuilders.get("/admin/getAllPolicy")
		.contentType(MediaType.APPLICATION_JSON)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
		.andReturn();
    }

	@Test
	@Transactional
    public void BE_spring_update_policy() throws Exception {
        String newPolicy = "{\"policyId\":\"01\",\"policytype\":\"ABC\",\"applicantName\":\"ABC\",\"applicantAddress\":\"chennai\",\"applicantMobile\":\"9876543210\",\"applicantEmail\":\"abc@gmail.com\",\"VehicleModel\":\"356484\"}";
        mockMvc.perform(MockMvcRequestBuilders.put("/admin/editPolicy")
		.param("jobId","01")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newPolicy)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
}
>>>>>>> 3cbbc0cd5ee603892aa270f120c8fba6d5297e17
