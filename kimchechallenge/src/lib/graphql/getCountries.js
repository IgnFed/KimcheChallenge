import { gql } from 'apollo-boost';

const GET_COUNTRIES = gql`
	query GetCountries {
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
`;

export { GET_COUNTRIES };
