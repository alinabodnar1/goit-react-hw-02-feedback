import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul style={{listStyle: "none"}}>
            {options.map(option => (
                <button type="button" key={option} onClick={()=>onLeaveFeedback(option)}>
                    {option}
                </button>
              )
            )}    
        </ul>
    )
}



