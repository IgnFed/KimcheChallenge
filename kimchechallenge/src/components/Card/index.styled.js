import styled from 'styled-components';

export const StyledTopSection = styled.section`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	margin-bottom: 1rem;
`;

export const StyledExtraInfoSection = styled(StyledTopSection)`
	flex-direction: column;
	align-items: flex-start;
`;

export const StyledExtraInfoSpan = styled.span`
	color: ${props => props.theme.themeObj.color};
	text-decoration: underline;
	margin-bottom: auto.75rem;
`;

export const EmojiStyled = styled(StyledExtraInfoSpan)`
	background-color: ${props =>
		props.theme.mode === 'dark' ? '#393b59' : '#4b486e'};
	color: #ffffff;
	height: 25px;
	width: 30px;
	border-radius: 0.75rem;
	text-align: center;
`;

export default styled.article`
	display: grid;
	padding: 1rem;
	grid-template-rows: 2em 1fr;
	width: 100%;
	height: fit-content;
	border: 1px solid #ddd;
	border-radius: 1rem;
`;
