import React from 'react';
import StyledInput from './index.styled';

export default function Input({ value, onChange, placeholder }) {
	return (
		<StyledInput onChange={onChange} value={value} placeholder={placeholder} />
	);
}
