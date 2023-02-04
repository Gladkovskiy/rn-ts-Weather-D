import Geolocation from '@react-native-community/geolocation'
import {Button, makeStyles} from '@rneui/themed'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import SearchInput from '../components/ChooseCityScreen/SearchInput'

const ChooseCity = () => {
  const styles = useStyle()

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        console.log('lat:', latitude, 'long:', longitude)
      },
      ({message}) => {
        console.log(message)
      },
      {timeout: 10000, maximumAge: 0, enableHighAccuracy: true},
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={getPosition} title="Get current position" />

      <SearchInput />
    </SafeAreaView>
  )
}

export default ChooseCity

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}))
