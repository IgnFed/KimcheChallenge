import { gql } from 'apollo-boost';

const GET_COUNTRIES = gql`
	query GetCountries {
		countries {
			name
			native
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
