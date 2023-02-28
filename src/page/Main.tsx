import {useNavigation} from '@react-navigation/native'
import {Button, makeStyles} from '@rneui/themed'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import Error from '../components/Error'
import {GlobalContext} from '../components/GlobalContextProvider'
import InfoApp from '../components/InfoApp'
import Loading from '../components/Loading'
import CurrentWeather from '../components/MainScreen/CurrentWeather'
import {useCurrentWeather} from '../http/query/useWeather'
import {mainScreenKeys, Screens} from '../languages/types'
import {NavigationProps} from '../types/reactNavigation'
import {ROUTES} from '../types/routes'

const Main = () => {
  const {
    t,
    i18n: {language},
  } = useTranslation<Screens>('mainScreen')
  const translate = t<mainScreenKeys>

  const styles = useStyle()

  const {coordinates} = useContext(GlobalContext)
  const {data, isSuccess, isFetching, isError} = useCurrentWeather(
    coordinates,
    language,
  )

  const {navigate} = useNavigation<NavigationProps>()

  return (
    <SafeAreaView style={styles.container}>
      {isSuccess ? (
        <>
          <CurrentWeather data={data} isLoading={isFetching} />

          <InfoApp />

          <Button
            title={translate('forecastButton')}
            onPress={() => {
              navigate(ROUTES.FORECAST_FIVE_DAYS)
            }}
          />
        </>
      ) : !isError ? (
        <Loading />
      ) : (
        <Error isLoading={isFetching} />
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
