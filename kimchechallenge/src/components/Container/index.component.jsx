import React from 'react';
import StyledSearcherContainer from './index.styled';

export default function Container({ children, onSubmit }) {
	return (
		<StyledSearcherContainer onSubmit={onSubmit}>
			{children}
		</StyledSearcherContainer>
	);
}
