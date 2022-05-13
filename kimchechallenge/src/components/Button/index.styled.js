import styled from 'styled-components';

export default styled.button`
	background-color: ${props =>
		props.theme.mode === 'light' ? '#9395bd' : '#393b59'};
`;
