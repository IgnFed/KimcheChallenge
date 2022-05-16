import styled from 'styled-components';
import { motion } from 'framer-motion';

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
		props.theme.mode === 'dark' ? '#093b59' : '#6b486e'};
	height: 25px;
	width: 30px;
	border-radius: 0.75rem;
	text-align: center;
`;

export default styled(motion.article)`
	display: grid;
	padding: 1rem;
	color: #ffffff;
	background-color: ${props =>
		props.theme.mode === 'dark' ? '#293b59' : '#0b486e'};
	box-shadow: ${props =>
		props.theme.mode === 'dark'
			? '3px 3px 3px #0b486e'
			: '3px 3px 3px #393b59'};
	grid-template-rows: 2em 1fr;
	width: 100%;
	height: fit-content;
	border: 1px solid #ddd;
	border-radius: 0.75rem;
	transition: border-radius 0.2s;
	:hover {
		border-radius: 1.3rem;
	}
`;
