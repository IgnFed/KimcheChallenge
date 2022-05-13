import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	html, body, *, *::before, *::after {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		color: ${props => (props.theme.mode === 'dark' ? '#ffffff' : '#000000')};
	}

	button, input, select {
		padding: .75rem;
		border: none;
		outline: none;
		background-color: ${props =>
			props.theme.mode === 'light' ? '#9395bd' : '#393b59'};
		border-radius: .475rem
	}
	.active{
		background-color: red;
	}
	input {
		width: 100%
	}
`;
