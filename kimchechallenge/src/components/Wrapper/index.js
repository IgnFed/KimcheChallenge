import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../lib/styled-components/themes';
import GlobalSyles from '../../lib/styled-components/GlobalSyles';
import Button from '../Button/index.styled';
import { MoonIcon, SunIcon } from '../Icons';

const ToggleButton = styled(Button)`
	position: absolute;
	right: 0.5rem;
	width: 45px;
	height: 45px;
	padding: 0;
	cursor: pointer;
	background-color: transparent;
`;

const StyledWrapper = styled.main`
	width: 100%;
	height: 100vh;
	padding: 0.5rem;
	background-color: ${props => props.theme.themeObj.colors.background};
`;

export const Wrapper = ({ children }) => {
	const [theme, setTheme] = useState({ mode: 'dark', themeObj: darkTheme });
	const ToggleTheme = () => {
		switch (theme.mode) {
			case 'light':
				setTheme({ mode: 'dark', themeObj: darkTheme });
				break;
			case 'dark':
				setTheme({ mode: 'light', themeObj: lightTheme });
		}
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalSyles />
				<StyledWrapper>
					<ToggleButton onClick={ToggleTheme} mode={theme.mode}>
						{(theme.mode === 'dark' && <MoonIcon fill='#4827ab' />) || (
							<SunIcon fill='#4827ab' />
						)}
					</ToggleButton>
					{children}
				</StyledWrapper>
			</ThemeProvider>
		</>
	);
};