import { gql } from 'apollo-boost';

export default gql`
	query GetCountries {
		countries {
			continent {
				name
				code
			}

			currency
			name
			native
			emoji
			languages {
				name
			}
			capital
		}
	}
`;
