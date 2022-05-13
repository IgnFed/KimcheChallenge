import styled from 'styled-components';

export default styled.div`
	display: flex;
	align-self: center;
	justify-content: center;
	gap: 0.75rem;
	width: 100%;

	@media (max-width: 26.875rem) {
		flex-direction: column;
	}
`;
