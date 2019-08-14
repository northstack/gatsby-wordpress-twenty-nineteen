import fetch from 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Config from './config';

import './src/styles/style.css';

export const wrapRootElement = ({ element }) => {
	if (Config.commentList.dynamic) {
		const client = new ApolloClient({
			fetch,
			uri: Config.source.url + '/graphql',
		});

		return <ApolloProvider client={client}>{element}</ApolloProvider>;
	} else {
		return <>{element}</>;
	}
};
