import React from 'react';
import { client } from '../config/gql_config';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import Students from './Students';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>My first Apollo app <div className="App-logo"> 🚀 </div></h2>
        <header className="App-header">
          <h2 className="App-logo">🚀</h2>
          <h2>GraphQL</h2>
          <h2 className="App-logo1">🚀</h2>
          <h2>GraphQL</h2>
          <h2 className="App-logo">🚀</h2>
          <h2>GraphQL</h2>
          <h2 className="App-logo1">🚀</h2>
          <h2>GraphQL</h2>
          <h2 className="App-logo">🚀</h2>
          <h2>GraphQL</h2>
          <h2 className="App-logo1">🚀</h2>
        </header>
        <Students />
      </div>
    </ApolloProvider>
  );
}

export default App;
