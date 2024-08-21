import React from 'react'
import { calculateInvestmentResults } from '../util/investment'

function Results({userInput}) {
    let result = [];
    result = calculateInvestmentResults(userInput)
    console.log(result)
    return (
    <div>
        {result.map(entry =>(
            <>
            <p>{entry.initialInvestment}</p>
            <p>{entry.annualInvestment}</p>
            <p>{entry.valueEndOfYear}</p>
            <p>{entry.year}</p>
            </>
        ))}
    </div>

  )
}

export default Results