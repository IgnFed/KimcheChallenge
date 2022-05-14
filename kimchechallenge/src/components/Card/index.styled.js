import styled from 'styled-components';

export const StyledTopSection = styled.section`
	display: flex;
	gap: 0.75rem;
`;

export const StyledExtraInfoSpan = styled.span`
	color: #ccc;
	text-decoration: underline;
	margin-bottom: auto.75rem;
`;

export default styled.article`
	display: grid;
	padding: 0.475rem;
	grid-template-rows: 2em 1fr;
	width: 33%;
	min-width: 150px;
	height: 200px;
	border: 1px solid #ddd;
	border-radius: 1rem;
`;
