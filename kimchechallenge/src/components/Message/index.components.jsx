import React from 'react';
import StyledMessage from './index.styled';

export const Message = ({ children, type }) => (
	<StyledMessage
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		type={type}
	>
		<h2>{children || 'An Error Has Ocurred'}</h2>
	</StyledMessage>
);
