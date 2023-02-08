import {makeStyles} from '@rneui/themed'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import TabItem from '../components/ForecasrFiveDaysScreen/TabItem'
import TabViewWeather from '../components/ForecasrFiveDaysScreen/TabViewWeather'
import Loading from '../components/Loading'
import {useForecast} from '../http/query/useWeather'

const ForecastFiveDays = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const {data, isSuccess} = useForecast({
    lat: 48.8532,
    lng: 37.6053,
  })
  const styles = useStyle()

  return (
    <SafeAreaView style={styles.container}>
      {isSuccess ? (
        <>
          <TabItem forecast={data} index={tabIndex} setIndex={setTabIndex} />
          <TabViewWeather forecast={data} index={tabIndex} />
        </>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  )
}

export default ForecastFiveDays

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}))
