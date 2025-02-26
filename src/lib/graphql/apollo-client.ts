import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://65.0.125.251/api/graphql', // Replace with your GraphQL endpoint
  credentials: 'include', // Ensures cookies and auth headers are sent
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;