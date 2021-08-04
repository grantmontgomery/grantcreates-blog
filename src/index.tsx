import * as React from "react";
import { App } from "./App";
import {
  InMemoryCache,
  ApolloProvider,
  ApolloClient,
  gql,
} from "@apollo/client";
import ReactDOM from "react-dom";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App></App>
  </ApolloProvider>,
  document.getElementById("root")
);
