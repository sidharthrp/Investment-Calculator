import React, { useState } from 'react'

function Inputs({userInput, onChangeInput}) {


  return (
    <div id='user-input'>
        <div className='input-group'> 
            <div>
                <label name='initialInvestment'>INITIAL INVESTMENT</label>
                <input type='number' name='initialInvestment' onChange={onChangeInput} value={userInput.initialInvestment}></input>
            </div>
            <div>
                <label name='annualInvestment'>ANNUAL INVESTMENT</label>
                <input type='number' name='annualInvestment' onChange={onChangeInput} value={userInput.annualInvestment} ></input>
            </div>
        </div>
        <div className='input-group'> 
            <div>
                <label name='expectedReturn'>EXPECTED RETURN</label>
                <input type='number' name='expectedReturn' onChange={onChangeInput} value={userInput.expectedReturn}></input>
                
            </div>
            <div> 
                <label name='duration'>DURATION</label>
                <input type='number' name='duration' onChange={onChangeInput} value={userInput.duration}></input>
            </div>
        </div>
    </div>
  )
}

export default Inputs