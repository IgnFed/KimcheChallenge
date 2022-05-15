import { gql } from 'apollo-boost';

export default gql`
	query GetContinents {
		continents {
			name
			countries {
				name
				native
				emoji
				languages {
					name
				}
				continent {
					name
				}
				capital
			}
		}
	}
`;
