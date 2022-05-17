import React from 'react';
import Card from '../Card/index.component';
import StyledList from './index.styled';
import Message from '../Message/index.components';

export default function CountriesList({
	currentFilter = 'continent',
	countries = [],
}) {
	if (countries.length === 0)
		return <Message type='info'>No Countries to display</Message>;
	return (
		<StyledList>
			{countries.map(country => (
				<li key={country.name}>
					<Card countryData={country} currentFilter={currentFilter} />
				</li>
			))}
		</StyledList>
	);
}
