import React, { useEffect, useReducer, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CONTINENTS } from './lib/graphql';
import { Container } from './components/Container/index.component';
import { Button } from './components/Button/index.component';
import { Input } from './components/Input/index.component';
import styled from 'styled-components';
import { SearchIcon } from './components/Icons';
import { ContinentsList } from './components/Continent/index.component';

const COUNTRIES_FILTERS = ['continent', 'language'];

const FormContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 0 auto 1rem auto;
	width: 70%;
	@media (max-width: 26.875rem) {
		width: 100%;
	}
`;

const StyledLayout = styled.div`
	margin-top: 4rem;
`;

const FiltersContainer = styled.div`
	display: grid;
	grid-template-columns: 30% 1fr;
`;

const Title = styled.h1`
	width: 70%;
	margin: 0 auto 2rem auto;
`;

const INITIAL_DATA = [];

function reducer(data, action) {
	const { payload, changeLoading } = action;

	switch (action.filter) {
		case 'continent':
			payload.forEach(continent => {
				continent.countries.sort(
					(a, b) => (a.name < b.name && -1) || (a.name > b.name && 1) || 0
				);
			});
			changeLoading();
			return payload;
		case 'language':
			payload.forEach(continent => {
				continent.countries.sort();
			});
	}
}

const App = () => {
	const [searcherValue, setSearcherValue] = useState('');
	const [currentFilter, setCurrentFilter] = useState(COUNTRIES_FILTERS[0]);
	const [loading, setLoading] = useState(true);
	const { data } = useQuery(GET_CONTINENTS);
	const [continents, dispatch] = useReducer(reducer, INITIAL_DATA);

	useEffect(() => {
		if (!data || !data.continents) return;
		dispatch({
			filter: currentFilter,
			payload: data.continents || [],
			changeLoading: () => setLoading(false),
		});
	}, [data]);

	const handleFilter = filterName => {
		setCurrentFilter(filterName);
		setLoading(true);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);
	};

	const handleChange = e => {
		setSearcherValue(e.target.value);
	};

	return (
		<StyledLayout>
			<Title>Country Search</Title>
			<FormContainer as='form' onSubmit={handleSubmit}>
				<Container>
					<SearchIcon />
					<Input
						value={searcherValue}
						onChange={handleChange}
						placeholder={'Search Country'}
					/>
				</Container>
				<FiltersContainer>
					<h3>Group By: </h3>
					<Container>
						{COUNTRIES_FILTERS.map((v, i) => (
							<Button
								key={i}
								onClick={() => handleFilter(v)}
								className={`${currentFilter === v && 'active'} `}
							>
								{v}
							</Button>
						))}
					</Container>
				</FiltersContainer>
			</FormContainer>
			<FormContainer as={'div'}>
				{!loading ? (
					<ContinentsList continents={continents} />
				) : (
					<>Loading...</>
				)}
			</FormContainer>
		</StyledLayout>
	);
};
export default App;
