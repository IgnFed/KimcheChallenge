import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Container } from './components/Container/index.component';
import { Button } from './components/Button/index.component';
import { Input } from './components/Input/index.component';
import styled from 'styled-components';
import { SearchIcon } from './components/Icons';
// import { Select } from './components/Select/index.component';

const GET_COUNTRIES = gql`
	query GetCountries {
		countries {
			name
			code
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
	max-height: calc(100vh - 5rem);
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
	const { data } = useQuery(GET_COUNTRIES);

	const handleFilter = filterName => {
		setCurrentFilter(filterName);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(data);
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
		</StyledLayout>
	);
};
export default App;
