import {makeStyles} from '@rneui/themed'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import TabItem from '../components/ForecasrFiveDaysScreen/TabItem'
import TabViewWeather from '../components/ForecasrFiveDaysScreen/TabViewWeather'
import {IElementsForecast1Day} from '../types/weatherTypes'

const data5Days: IElementsForecast1Day[] = [
  {
    date: '14.01',
    list: [
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: -5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.7,
      },
      {
        dt: 1661871600,
        temp: -10,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0,
      },
      {
        dt: 1661871600,
        temp: 2,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 3,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 4,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 0,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
    ],
  },
  {
    date: '15.01',
    list: [
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: -5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.7,
      },
      {
        dt: 1661871600,
        temp: -10,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0,
      },
      {
        dt: 1661871600,
        temp: 2,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 3,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 4,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 0,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
    ],
  },
  {
    date: '16.01',
    list: [
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: -5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.7,
      },
      {
        dt: 1661871600,
        temp: -10,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0,
      },
      {
        dt: 1661871600,
        temp: 2,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 3,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 4,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 0,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
    ],
  },
  {
    date: '17.01',
    list: [
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: -5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.7,
      },
      {
        dt: 1661871600,
        temp: -10,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0,
      },
      {
        dt: 1661871600,
        temp: 2,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 3,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 4,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 0,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
    ],
  },
  {
    date: '18.01',
    list: [
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: -5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.7,
      },
      {
        dt: 1661871600,
        temp: -10,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0,
      },
      {
        dt: 1661871600,
        temp: 2,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 3,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 4,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 0,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
      {
        dt: 1661871600,
        temp: 5,
        windSpeed: 0.65,
        humidity: 65,
        icon: '10d',
        pop: 0.6,
      },
    ],
  },
]

const ForecastFiveDays = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const styles = useStyle()

  return (
    <SafeAreaView style={styles.container}>
      <TabItem forecast={data5Days} index={tabIndex} setIndex={setTabIndex} />
      {/* <ForecastListItem {...data} /> */}
      <TabViewWeather forecast={data5Days} index={tabIndex} />
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
