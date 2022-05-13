import React from 'react';

export const Input = ({ value, onChange, placeholder }) => (
	<input onChange={onChange} value={value} placeholder={placeholder} />
);
