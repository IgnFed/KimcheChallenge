import React from 'react';
import { Card } from '../../components/Card/index.component';

export const ContinentsList = ({
	currentFilter = 'continent',
	countries = [],
}) => {
	return (
		<ul>
			{countries.length === 0
				? 'No Countries to display'
				: countries.map(country => (
						<Card
							key={country.name}
							countryData={country}
							currentFilter={currentFilter}
						/>
				  ))}
		</ul>
	);
};
