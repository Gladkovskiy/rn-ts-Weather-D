import Geolocation from '@react-native-community/geolocation'
import {ThemeProvider} from '@rneui/themed'
import React, {useContext, useEffect} from 'react'
import {StatusBar} from 'react-native'
import {PERMISSIONS, request} from 'react-native-permissions'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import AppRouter from './src/components/AppRouter'
import {GlobalContext} from './src/components/GlobalContextProvider'
import './src/languages/IMLocalize'
import {theme} from './src/style/theme'

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark'
  const {setLocationPermission} = useContext(GlobalContext)

  useEffect(() => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
      if (result === 'granted' || result === 'limited')
        setLocationPermission(true)
    })

    Geolocation.setRNConfiguration({skipPermissionRequests: false})
  }, [])

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={'light-content'} />

        <AppRouter />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
