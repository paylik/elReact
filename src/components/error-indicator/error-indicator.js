import React from "react";
import './error-indicator.css';

const ErrorIndicator = ({ error }) => {
    return <div>{ error.message }</div>
};

export default ErrorIndicator;