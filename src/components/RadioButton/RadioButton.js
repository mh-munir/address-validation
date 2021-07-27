import React from 'react';

const RadioButton = ({onClick, name, type, className, value, id, title, checked}) => (
    <label htmlFor={id}>
        <input onClick={onClick} type={type} className={className} value={value} name={name} checked={checked} id={id}  />
        <p>{title}</p>
    </label>
);
export default RadioButton;