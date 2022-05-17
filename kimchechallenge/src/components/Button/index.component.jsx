import React from 'react';
import StyledButton from './index.styled';

export default function Button({
	children,
	onClick,
	type = 'button',
	className,
}) {
	return (
		<StyledButton type={type} onClick={onClick} className={className}>
			{children}
		</StyledButton>
	);
}
