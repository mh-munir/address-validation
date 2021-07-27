import React from 'react';

const TextArea = ({name, cols, rows, className, value, id}) => (
    <textarea  className={className} cols={cols} rows={rows} value={value} name={name}  id={id}  />
);

export default TextArea;