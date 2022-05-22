import React from "react";
import './PrimaryButton.css'

const PrimaryButton = ({ children }) => {
  return (
    <button className="hero-btn btn uppercase border-0">
      {children}
    </button>
  );
};

export default PrimaryButton;
