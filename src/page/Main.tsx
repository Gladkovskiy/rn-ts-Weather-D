import {Button, makeStyles} from '@rneui/themed'
import {useNavigation} from '@react-navigation/native'

import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {NavigationProps} from '../types/reactNavigation'
import {ROUTES} from '../types/routes'
import CurrentWeather from '../components/MainScreen/CurrentWeather'
import {ICurrentWeather} from '../types/weatherTypes'

const mokData: ICurrentWeather = {
  main: {humidity: 67, temp: 25, pressure: 1025, feels_like: 27},
  weather: [{description: 'Солнечно', main: 'Sunny'}],
  wind: {speed: 0.55},
  visibility: 10000,
  dt: 1661870592,
  sys: {sunrise: 1661834187, sunset: 1661882248},
}

const Main = () => {
  const styles = useStyle()

  const {navigate} = useNavigation<NavigationProps>()
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        title={'Выбрать город'}
        onPress={() => {
          navigate(ROUTES.CHOOSE_CITY)
        }}
      />   */}
      <CurrentWeather data={mokData} />
      <Button
        title={'Прогноз на 5 дней'}
        onPress={() => {
          navigate(ROUTES.FORECAST_FIVE_DAYS)
        }}
      />
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
