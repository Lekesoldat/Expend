import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  link: new HttpLink({
    uri:
      process.env.NODE_ENV === "development"
        ? "http://localhost:4500/graphql"
        : "https://expend-api.holtet.me/graphql",
  }),
  cache: new InMemoryCache(),
});

console.info(`Frontend environment: ${process.env.NODE_ENV}`);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
