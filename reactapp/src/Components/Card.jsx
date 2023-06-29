import React from 'react'
const policyData = [
  {
    policyName: 'Life insurance',
    yourPolicyId: '928888211',
    applicableAge: '5 to 50',
    policyDetails: 'aaa....',
    numberOfYearsPlan: '10 years',
    claimAmount: '2,00,000',
    termsAndConditions: 'xx.....',
  },
]
export default function Card() {
  return (
    <div style={{paddingLeft:'450px',alignContent:'center'}}>
        <div className="card my-2 mx-5" style={{width:'50rem'}}>
            <div className="card-body d-flex" id="policyGrid">
              <div className='container-lg p-2 flex-fill'>
                <h5 className="my-3">Policy name: {policyData[0].policyName}</h5>
                
                <h5 className="my-3">Applicable age: {policyData[0].applicableAge}</h5>
                
                <h5 className="my-3">Number of years plan:{policyData[0].numberOfYearsPlan} </h5>
                <h5 className="my-3">Claim Amount: {policyData[0].claimAmount}</h5>
              </div>
              <div className='container-lg p-2 flex-fill'>
                <h5 className="my-3">Your policy id: {policyData[0].yourPolicyId}</h5>
                <h5 className="my-3">Policy Details: {policyData[0].policyDetails}</h5>
                <h5 className="my-3">Terms and Conditions: {policyData[0].termsAndConditions}</h5>
              </div>
            </div>
        </div>

    </div>
  )
}
