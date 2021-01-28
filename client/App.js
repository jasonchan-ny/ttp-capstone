import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import store from "./redux/store";
import MasterNavigator from "./navigators/MasterNavigator";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:5000/",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MasterNavigator />
      </Provider>
    </ApolloProvider>
  );
}
