import React from 'react';
import StyledButton from './index.styled';

export const Button = ({ children, onClick, type = 'button', className }) => (
	<StyledButton type={type} onClick={onClick} className={className}>
		{children}
	</StyledButton>
);
