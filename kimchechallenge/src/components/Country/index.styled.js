import styled from 'styled-components';

export default styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, minmax(200px, calc(50% - 1rem)));
	gap: 1rem;
`;
