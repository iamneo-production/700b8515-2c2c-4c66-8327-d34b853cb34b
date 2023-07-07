const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-bfdeabbacbdfacfbfaacdedbbaffaccbcbcbbd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.click('#signupLink');
      await page.waitForNavigation();
      await page.type('#email', 'test@gmail.com');
      await page.type('#username', 'testuser');
      await page.type('#mobileNumber', '9876543210');
      await page.type('#password', 'Test@123');
      await page.type('#confirmPassword', 'Test@123');
      await page.click('#submitButton');
      await page.waitForNavigation();
      await page.waitForSelector('#loginButton',{timeout:3000});
      console.log('TESTCASE:FE_signup:success');
    }
     catch(e){
      console.log('TESTCASE:FE_signup:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-bfdeabbacbdfacfbfaacdedbbaffaccbcbcbbd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@gmail.com');
      await page.type('#password', 'Test@123');
      await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#homeButton',{timeout:3000});
      console.log('TESTCASE:FE_login:success');
    }
     catch(e){
      console.log('TESTCASE:FE_login:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-bfdeabbacbdfacfbfaacdedbbaffaccbcbcbbd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'test@gmail.com');
    await page.type('#password', 'Test@123');
    await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#userViewPolicy',{timeout:3000});
      await page.click('#userViewPolicy');
      await page.waitForSelector('#viewGrid1',{timeout:3000});
      await page.click('#profile');
      await page.waitForSelector('#enterName',{timeout:3000});
      console.log('TESTCASE:FE_userAddPolicyOperation:success');
    }
     catch(e){
      console.log('TESTCASE:FE_userAddPolicyOperation:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-bfdeabbacbdfacfbfaacdedbbaffaccbcbcbbd.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
  await page.type('#email', 'test@gmail.com');
  await page.type('#password', 'Test@123');
  await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#userMyPolicy',{timeout:3000});
    await page.click('#userMyPolicy');
    await page.waitForSelector('#policyGrid1',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_userProfileOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_userProfileOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-bfdeabbacbdfacfbfaacdedbbaffaccbcbcbbd.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#addPolicy',{timeout:3000});
    await page.click('#addPolicy');
    await page.waitForSelector('#policyName',{timeout:3000});
    await page.click('#policyDetails');
    await page.waitForSelector('#searchPolicy',{timeout:3000});
    console.log('TESTCASE:FE_adminPolicyOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_adminPolicyOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-bfdeabbacbdfacfbfaacdedbbaffaccbcbcbbd.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#applicantDetails',{timeout:3000});
    await page.click('#applicantDetails');
    await page.waitForSelector('#searchById',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_adminApplicantOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_adminApplicantOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();