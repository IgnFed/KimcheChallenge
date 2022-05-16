import React from 'react';
import { Card } from '../Card/index.component';
import StyledList from './index.styled';

export const CountriesList = ({
	currentFilter = 'continent',
	countries = [],
}) => {
	return (
		<StyledList>
			{countries.length === 0
				? 'No Countries to display'
				: countries.map(country => (
						<li key={country.name}>
							<Card countryData={country} currentFilter={currentFilter} />
						</li>
				  ))}
		</StyledList>
	);
};
