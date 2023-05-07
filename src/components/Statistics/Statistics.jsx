import React from 'react';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage }) => (
        <>
            <ul style={{listStyle: "none"}}>
                <li>Good:
                        <span> {good}</span>
                    </li>
                    <li>Neutral:
                        <span> {neutral}</span>
                    </li>
                    <li>Bad:
                        <span> {bad}</span>
                    </li>
                </ul>

                 <ul style={{listStyle: "none"}}>
                    <li>Total:
                        <span> {total} </span>
                    </li>
                    <li>Positive feedback:
                        <span> {positivePercentage} </span>
                    </li>
                </ul>
        </>
)

    

    
            
 
export default Statistics;