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

	button, input{
		padding: .75rem;
		border: none;
		outline: none;
		background-color: ${props =>
			props.theme.mode === 'light' ? '#4b486e' : '#393b59'};
		color:	#fff;
		border-radius: .475rem;
		width: 100%;
	}
	
	button {
		cursor: pointer;
		transition: background-color .2s;
	}
	.active{
		background-color: ${props =>
			props.theme.mode === 'light' ? '#2e2687' : '#5889ad'};
	}
`;
