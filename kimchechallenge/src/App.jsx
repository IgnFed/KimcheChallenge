import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from './lib/graphql';
import { Container } from './components/Container/index.component';
import { Button } from './components/Button/index.component';
import { Input } from './components/Input/index.component';
import styled from 'styled-components';
import { SearchIcon } from './components/Icons';
import { CountriesList } from './components/Country/index.component';
import countries from './lib/graphql/countries';
import useDebounce from './hooks/useDebounce';

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

const App = () => {
	const [searcherValue, setSearcherValue] = useState('');
	const [currentFilter, setCurrentFilter] = useState(COUNTRIES_FILTERS[0]);
	const [firstSearch, setFirstSearch] = useState(true);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const { loading, data, error } = useQuery(GET_COUNTRIES);
	const valueDebounced = useDebounce(searcherValue, 500);

	useEffect(() => {
		if (loading) return;
		setFilteredCountries(filterByName(valueDebounced.toLowerCase()));
	}, [data, valueDebounced]);

	const filterByName = name =>
		countries &&
		data.countries.filter(country => country.name.toLowerCase().includes(name));

	const handleFilter = filterName => {
		setCurrentFilter(filterName);
	};
	if (error) return <h1>Error</h1>;
	return (
		<StyledLayout>
			<Title>Country Search</Title>
			<FormContainer as='form'>
				<Container>
					<SearchIcon />
					<Input
						value={searcherValue}
						onChange={e => {
							setSearcherValue(e.target.value);
							firstSearch && setFirstSearch(false);
						}}
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
				{firstSearch ? (
					<span>Search for Something</span>
				) : !loading ? (
					<CountriesList
						currentFilter={currentFilter}
						countries={filteredCountries}
					/>
				) : (
					<>Loading...</>
				)}
			</FormContainer>
		</StyledLayout>
	);
};
export default App;
