import React from 'react';
import StyledSearcherContainer from './index.styled';

export const Container = ({ children, onSubmit }) => (
	<StyledSearcherContainer onSubmit={onSubmit}>
		{children}
	</StyledSearcherContainer>
);
