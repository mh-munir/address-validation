import React from 'react';

const InputField = ({onClick, name, type, className, value, id, placeholder, readOnly}) =>  (

    <input onClick={onClick} name={name} className={className} value={value} id={id} placeholder={placeholder} readOnly={readOnly}  />

    );
export default InputField;