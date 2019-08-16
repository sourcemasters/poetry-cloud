import React, { Component } from 'react';
import'./App.css';

export const PoemButton = ({ text, onClick, disabled}) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className={StyleSheet.button}
    >
        {text}
    </button>
)