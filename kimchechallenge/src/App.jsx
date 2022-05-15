import React, { Fragment, useEffect, useReducer, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from './lib/graphql/getCountries';
import { Container } from './components/Container/index.component';
import { Button } from './components/Button/index.component';
import { Input } from './components/Input/index.component';
import styled from 'styled-components';
import { SearchIcon } from './components/Icons';
import { Card } from './components/Card/index.component';

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
	if (!action.payload.length) return data;
	data = action.payload;
	switch (action.filter) {
		case 'continent':
			data.sort(
				(a, b) => (a.name > b.name && 1) || (a.name < b.name && -1) || 0
			);
			data.sort(
				(a, b) =>
					(a.continent.name > b.continent.name && 1) ||
					(a.continent.name < b.continent.name && -1) ||
					0
			);
			action.cahngeLoading();
			return data;
		case 'language':
			data.sort(
				(a, b) =>
					(a.languages[0]?.name > b.languages[0]?.name && 1) ||
					(a.languages[0]?.name < b.languages[0]?.name && -1) ||
					0
			);
			action.cahngeLoading();
			return data;

		default:
			return data;
	}
}

const App = () => {
	const [searcherValue, setSearcherValue] = useState('');
	const [currentFilter, setCurrentFilter] = useState(COUNTRIES_FILTERS[0]);
	const [filterArr, setFilterArr] = useState([]);
	const [loading, setLoading] = useState(true);
	const { data } = useQuery(GET_COUNTRIES);
	const [countriesState, dispatch] = useReducer(reducer, INITIAL_DATA);

	useEffect(() => {
		if (!data || !data.countries) return;
		const arr = [];
		data.countries.forEach(({ continent }) => {
			if (!arr.includes(continent.name)) arr.push(continent.name);
		});
		setFilterArr(prev => [...prev, ...arr]);
		dispatch({
			filter: currentFilter,
			payload: data.countries,
			cahngeLoading: () => setLoading(false),
		});
	}, [data]);

	const handleFilter = filterName => {
		setCurrentFilter(filterName);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);
		dispatch({
			filter: currentFilter,
			payload:
				countriesState && countriesState.length > 0
					? countriesState
					: data.countries,
			cahngeLoading: () => setLoading(false),
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
			<FormContainer as={'div'}>
				{!loading ? (
					countriesState.map((v, i) => (
						<Fragment key={v.name}>
							{i === 0 ? (
								<h4>{v.continent.name}</h4>
							) : countriesState[i - 1].continent.name !==
							  countriesState[i].continent.name ? (
								<h4>{countriesState[i].continent.name}</h4>
							) : (
								<></>
							)}
							<Card countryData={v} />
						</Fragment>
					))
				) : (
					<>Loading...</>
				)}
			</FormContainer>
		</StyledLayout>
	);
};
export default App;
