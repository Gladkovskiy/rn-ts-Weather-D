import {ThemeProvider} from '@rneui/themed'
import React from 'react'
import {StatusBar, useColorScheme} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import AppRouter from './src/components/AppRouter'
import {theme} from './src/style/theme'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <AppRouter />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
