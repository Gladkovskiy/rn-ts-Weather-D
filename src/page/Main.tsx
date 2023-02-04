import {useNavigation} from '@react-navigation/native'
import {Button, makeStyles} from '@rneui/themed'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Loading from '../components/Loading'
import CurrentWeather from '../components/MainScreen/CurrentWeather'
import {useCurrentWeather} from '../http/query/useWeather'
import {NavigationProps} from '../types/reactNavigation'
import {ROUTES} from '../types/routes'

const Main = () => {
  const styles = useStyle()
  const {data, isSuccess} = useCurrentWeather({lat: 48.8532, lng: 37.6053})

  const {navigate} = useNavigation<NavigationProps>()
  return (
    <SafeAreaView style={styles.container}>
      {isSuccess ? (
        <>
          <CurrentWeather data={data} />
          <Button
            title={'Прогноз на 5 дней'}
            onPress={() => {
              navigate(ROUTES.FORECAST_FIVE_DAYS)
            }}
          />
        </>
      ) : (
        <Loading />
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
