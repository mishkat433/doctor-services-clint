import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none hover:bg-gradient-to-l duration-300">{children}</button>
    );
};

export default PrimaryButton;