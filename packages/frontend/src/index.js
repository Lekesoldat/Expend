import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://api.expend.holtet.me" }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
