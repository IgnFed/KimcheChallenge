import React, { useReducer, useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Container } from './components/Container/index.component';
import { Button } from './components/Button/index.component';
import { Input } from './components/Input/index.component';
import styled from 'styled-components';
import { SearchIcon } from './components/Icons';
import { Card } from './components/Card/index.component';

const GET_COUNTRIES = gql`
	query GetCountries {
		countries {
			name
			code
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

function reducer(data, action) {
	switch (action.filter) {
		case 'continent':
			return action.payload.countries.sort(
				(a, b) =>
					(a.continent.name > b.continent.name && 1) ||
					(a.continent.name < b.continent.name && -1) ||
					0
			);
		// return data;
		case 'language':
			return action.payload.countries.sort(
				(a, b) =>
					(a.languages[0].name > b.languages[0].name && 1) ||
					(a.languages[0].name < b.languages[0].name && -1) ||
					0
			);
	}
}

// const INITIAL_COUNTRIES_DATA = {
// 	countries: []
// };

const App = () => {
	const [searcherValue, setSearcherValue] = useState('');
	const [currentFilter, setCurrentFilter] = useState(COUNTRIES_FILTERS[0]);
	const { loading, data } = useQuery(GET_COUNTRIES);
	const [countriesState, dispatch] = useReducer(reducer, data);

	const handleFilter = filterName => {
		setCurrentFilter(filterName);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({
			filter: currentFilter,
			payload: data,
		});
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
			{/* {!loading && (
				<>
					{countriesState.countries.map(v => {
						console.log(v);
						return <></>;
					})}
				</>
			)} */}
		</StyledLayout>
	);
};
export default App;
