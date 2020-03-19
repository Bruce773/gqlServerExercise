import React from "react";
import { HomeScreen } from "./HomeScreen";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8181/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div
        style={{
          backgroundColor: "#26292d",
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <HomeScreen />
      </div>
    </ApolloProvider>
  );
}

export default App;
