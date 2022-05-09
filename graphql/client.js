import { ApolloClient } from "@apollo/client";

export default () => {
  return new ApolloClient({
    uri: process.env?.subgraph?.uri,
    cache: new InMemoryCache()
  });
};