import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Button } from './components/Button/index.component';
import { Input } from './components/Input/index.component';

const client = new ApolloClient({
	uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const App = () => (
	<ApolloProvider client={client}>
		<Button>D</Button>
		<Input />
	</ApolloProvider>
);
export default App;
