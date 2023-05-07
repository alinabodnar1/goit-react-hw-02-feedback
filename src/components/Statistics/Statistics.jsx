import React from 'react';
import PropTypes from "prop-types";

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage }) => (
        <>
            <ul style={{listStyle: "none"}}>
                <li style={{color: "darkblue"}}>Good:
                    <span> {good}</span>
                </li>
                <li style={{color: "darkblue"}}>Neutral:
                    <span> {neutral}</span>
                </li>
                <li style={{color: "darkblue"}}>Bad:
                    <span> {bad}</span>
                </li>
            </ul>

            <ul style={{listStyle: "none"}}>
                <li style={{color: "darkblue"}}>Total:
                    <span> {total} </span>
                </li>
                <li style={{color: "darkblue"}}>Positive feedback:
                    <span> {positivePercentage} </span>
                </li>
            </ul>
        </>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}

export default Statistics;    

    
            
 
