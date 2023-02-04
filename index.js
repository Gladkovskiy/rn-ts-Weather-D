/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import GlobalContextProvider from './src/components/GlobalContextProvider'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 100,
      cacheTime: 5 * 60 * 100,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const AppMain = () => {
  return (
    <GlobalContextProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </GlobalContextProvider>
  )
}

AppRegistry.registerComponent(appName, () => AppMain)
