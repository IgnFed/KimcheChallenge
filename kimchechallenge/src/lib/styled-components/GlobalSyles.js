import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	html, body, *, *::before, *::after {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	button, input {
		padding: .75rem;
		color: ${props => (props.theme.mode === 'dark' ? '#ffffff' : '#000000')};
		border: none;
		outline: none;
		border-radius: .475rem
	}
`;
