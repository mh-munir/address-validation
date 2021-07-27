import React from 'react';
import {Button} from "react-bootstrap";
const CustomButton =({onClick,type,className,title,disabled,variant})=>(
    <Button onClick={onClick} disabled={disabled} type={type} className={className} variant={variant}>{title}</Button>
)
export default CustomButton;