import styled from 'styled-components';

export default styled.button`
	outline: 2px solid transparent;
	transition: outline-color 0.2s;
	@media (max-width: 26.875rem) {
		width: 75%;
		align-self: center;
	}
	:hover {
		outline-color: ${props => props.theme.themeObj.outlineColor};
	}
	:focus {
		outline-color: ${props => props.theme.themeObj.outlineColor};
	}
`;
