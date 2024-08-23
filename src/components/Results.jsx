import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

function Results({userInput}) {
    let result = [];
    let totalInterest=0
    let investedCapital=0
    result = calculateInvestmentResults(userInput)
    console.log(result)
    return (

        <table id="result">
            <thead>
            <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total interest</th>
            <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {result.map(entry =>{
            {totalInterest+=entry.interest}
            {investedCapital=entry.valueEndOfYear-totalInterest}
            return(
            <tr key={entry.year}>
            <td>{entry.year}</td>
            <td>{formatter.format(entry.valueEndOfYear)}</td>
            <td>{formatter.format(entry.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
            </tr>
            );
})}
        </tbody>
        </table>


  )
}

export default Results