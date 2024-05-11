import React from 'react';

type BigButtonProps = {
    text: string;
};

let a = 1;

const BigButton: React.FC<BigButtonProps> = ({ text }) => {
    return (
        <button className="big-button">

            I am big button.
            {text}
        </button>
    );
};

export default BigButton;