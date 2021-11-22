import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './App'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
