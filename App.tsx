import Geolocation from '@react-native-community/geolocation'
import {ThemeProvider} from '@rneui/themed'

import React, {useContext, useEffect} from 'react'
import {StatusBar, useColorScheme} from 'react-native'
import {PERMISSIONS, request} from 'react-native-permissions'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import AppRouter from './src/components/AppRouter'
import {GlobalContext} from './src/components/GlobalContextProvider'
import {theme} from './src/style/theme'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const {setLocationPermission} = useContext(GlobalContext)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  useEffect(() => {
    SplashScreen.hide()

    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
      if (result === 'granted' || result === 'limited')
        setLocationPermission(true)
    })

    Geolocation.setRNConfiguration({skipPermissionRequests: false})
  }, [])

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
