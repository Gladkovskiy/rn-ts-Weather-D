import {makeStyles} from '@rneui/themed'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import GetCurrentPosition from '../components/ChooseCityScreen/GetCurrentPosition'

import Search from '../components/ChooseCityScreen/Search'

const ChooseCity = () => {
  const styles = useStyle()

  return (
    <SafeAreaView style={styles.container}>
      <GetCurrentPosition />
      <Search />
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
