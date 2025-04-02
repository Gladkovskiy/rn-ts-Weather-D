import {useNavigation} from '@react-navigation/native'
import {Button, makeStyles} from '@rneui/themed'
import React, {useContext, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import Error from '../components/Error'
import {GlobalContext} from '../components/GlobalContextProvider'
import InfoApp from '../components/InfoApp'
import Loading from '../components/Loading'
import CurrentWeather from '../components/MainScreen/CurrentWeather'
import {useRefreshOnFocus} from '../hooks/useRefreshOnFocus'
import {useCurrentWeather, useForecast} from '../http/query/useWeather'
import {mainScreenKeys, Screens} from '../languages/types'
import {NavigationProps} from '../types/reactNavigation'
import {ROUTES} from '../types/routes'
import SplashScreen from 'react-native-splash-screen'

const Main = () => {
  const {
    t,
    i18n: {language},
  } = useTranslation<Screens>('mainScreen')
  const translate = t<mainScreenKeys>
  const styles = useStyle()
  const {navigate} = useNavigation<NavigationProps>()

  const {coordinates} = useContext(GlobalContext)
  const currentWeather = useCurrentWeather(coordinates, language)
  const forecastFiveDays = useForecast(coordinates)

  useEffect(() => {
    if (
      (currentWeather.isSuccess && forecastFiveDays.isSuccess) ||
      (currentWeather.isError && forecastFiveDays.isError)
    )
      SplashScreen.hide()
  }, [
    currentWeather.isSuccess,
    currentWeather.isError,
    forecastFiveDays.isSuccess,
    forecastFiveDays.isError,
  ])

  useRefreshOnFocus(currentWeather.refetch)
  useRefreshOnFocus(forecastFiveDays.refetch)

  const refetchQueries = () => {
    currentWeather.refetch()
    forecastFiveDays.refetch()
  }

  return (
    <SafeAreaView style={styles.container}>
      {currentWeather.isSuccess && forecastFiveDays.isSuccess ? (
        <>
          <CurrentWeather
            currentWeather={currentWeather.data}
            forecastOneDay={forecastFiveDays.data[0]}
            isLoading={currentWeather.isFetching}
          />

          <InfoApp />

          <Button
            title={translate('forecastButton')}
            onPress={() => {
              navigate(ROUTES.FORECAST_FIVE_DAYS)
            }}
          />
        </>
      ) : !currentWeather.isError && !forecastFiveDays.isError ? (
        <Loading />
      ) : (
        <Error refetchFn={refetchQueries} />
      )}
    </SafeAreaView>
  )
}

export default Main

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}))
