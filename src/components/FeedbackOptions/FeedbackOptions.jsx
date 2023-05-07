import React from 'react';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul style={{listStyle: "none"}}>
            {options.map(option => (
                <Button
                    style={{marginRight: 10}}
                    variant="contained"
                    type="button"
                    key={nanoid()}
                    onClick={() => onLeaveFeedback(option)}
                >        
                    {option} 
                </Button>
              )
            )}    
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

