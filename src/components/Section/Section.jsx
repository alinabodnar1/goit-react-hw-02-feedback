import React from 'react';
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

Section.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
}

export default Section;