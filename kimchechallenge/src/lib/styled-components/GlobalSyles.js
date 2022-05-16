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

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #81b8da;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #212635;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #656667;
}
::-webkit-scrollbar-track:active {
  background: #534646;
}
::-webkit-scrollbar-corner {
  background: transparent;
}


	li {
		list-style: none;
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
