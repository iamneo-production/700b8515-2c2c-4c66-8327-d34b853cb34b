import React from 'react'
import Navbar from '../Navbar'

export default function Userprofile() {
  return (
      <div>
        <Navbar/>
        <div className="my-0" style={{paddingLeft:'350px',border:'2px solid black',backgroundColor:'#c6c1cf'}}>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="policyName"></textarea>
                <label for="floatingTextarea">Enter Policy Name</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="applicableAge"></textarea>
                <label for="floatingTextarea">Enter applicable Age</label>
            </div> 
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="claimAmount"></textarea>
                <label for="floatingTextarea">Enter claim amount</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="noOfYearsPlan"></textarea>
                <label for="floatingTextarea">Enter no of years plan</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
                <textarea className="form-control" placeholder="Leave a comment here" id="rateOfInterest"></textarea>
                <label for="floatingTextarea">Rate of interest</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="enterPolicyDetails"></textarea>
               <label for="floatingTextarea">Enter Policy details</label>
            </div>
            <div className="my-5 mx-5 form-floating" style={{fontSize:16,width:'60%',border:'2px solid black'}}>
               <textarea className="form-control" placeholder="Leave a comment here" id="enterTermsAndConditions"></textarea>
               <label for="floatingTextarea">Enter terms and conditions</label>
            </div>
            <div style={{paddingLeft:'350px',fontSize:25,paddingBottom:'50px'}}>
                <button type="button" class="btn btn-outline-dark btn-lg" style={{color:'white',backgroundColor:'#42618f'}} id="addPolicyButton" >Add policy</button>
            </div>
            
        </div>
        
       </div>
  )
}