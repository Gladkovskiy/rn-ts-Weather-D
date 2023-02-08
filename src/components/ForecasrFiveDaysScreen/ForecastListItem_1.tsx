import {makeStyles, Text} from '@rneui/themed'
import Lottie from 'lottie-react-native'
import React, {FC} from 'react'
import {View} from 'react-native'
import {arrImage} from '../../assets/lottie/weather_icons/index'

import {IElementsForecast1Day} from '../../types/weatherTypes'
import {getImage} from '../../utils/getDynamicImage'

const ForecastListItem_1: FC<IElementsForecast1Day> = ({list}) => {
  const styles = useStyle()

  return (
    <View style={styles.container}>
      {list.map(({dt, temp, icon, humidity, pop, windSpeed}, index) => (
        <View
          key={dt}
          style={[
            styles.lineContainer,
            index % 2 === 1 ? styles.secondBg : null,
          ]}>
          <View style={styles.flex}>
            <Text h3>{dt}</Text>
          </View>

          <View style={styles.flex}>
            <Lottie
              source={getImage(icon, arrImage)}
              loop
              autoPlay
              style={styles.lottie}
            />
          </View>

          <View style={styles.flex}>
            <Text h3>{temp} &deg;</Text>
          </View>

          <View style={styles.flex}>
            <Text h3>{Math.round(windSpeed)} м/c</Text>
          </View>

          <View style={styles.flex}>
            <Text h3>{humidity} %</Text>
          </View>

          <View style={styles.flex}>
            <Text h3>{pop * 100} %</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default ForecastListItem_1

const useStyle = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '12.5%',
  },
  lottie: {
    width: 50,
  },
  flex: {
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    flexBasis: '16.7%',
  },
  secondBg: {
    backgroundColor: colors.secondary,
  },
}))
