import {makeStyles} from '@rneui/themed'
import React, {useState, useContext} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import TabItem from '../components/ForecasrFiveDaysScreen/TabItem'
import TabViewWeather from '../components/ForecasrFiveDaysScreen/TabViewWeather'
import {GlobalContext} from '../components/GlobalContextProvider'
import Loading from '../components/Loading'
import {useForecast} from '../http/query/useWeather'

const ForecastFiveDays = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const {coordinates} = useContext(GlobalContext)
  const {data, isSuccess} = useForecast(coordinates)
  const styles = useStyle()

  return (
    <SafeAreaView style={styles.container}>
      {isSuccess ? (
        <>
          <TabItem forecast={data} index={tabIndex} setIndex={setTabIndex} />
          <TabViewWeather
            forecast={data}
            tabNumber={tabIndex}
            changeTabNumber={setTabIndex}
          />
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
