import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Container } from './components/Searcher/index.component';
import { Button } from './components/Button/index.component';
import { Input } from './components/Input/index.component';
import styled from 'styled-components';
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
	height: 100vh;
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
			<h1>Country Seacrh</h1>
			<FormContainer as='form' onSubmit={handleSubmit}>
				<Input
					value={searcherValue}
					onChange={handleChange}
					placeholder={'Search Country'}
				/>
				<Container>
					<h3>Group By: </h3>
					{COUNTRIES_FILTERS.map((v, i) => (
						<span
							key={i}
							onClick={() => handleFilter(v)}
							className={`${currentFilter === v && 'active'} `}
						>
							{v}
						</span>
					))}
				</Container>
				<Button type='submit'>Search</Button>
			</FormContainer>
		</StyledLayout>
	);
};
export default App;
