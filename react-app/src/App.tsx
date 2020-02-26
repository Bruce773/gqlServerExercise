import React from "react";
import { HomeScreen } from "./HomeScreen";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8181/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
}

export default App;
