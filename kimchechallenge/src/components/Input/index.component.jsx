import React from 'react';
import StyledInput from './index.styled';

export const Input = ({ value, onChange, placeholder }) => (
	<StyledInput onChange={onChange} value={value} placeholder={placeholder} />
);
