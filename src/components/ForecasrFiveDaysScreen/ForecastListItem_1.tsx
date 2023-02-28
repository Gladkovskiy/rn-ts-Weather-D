import {makeStyles, Text} from '@rneui/themed'
import Lottie from 'lottie-react-native'
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {View} from 'react-native'
import {arrImage} from '../../assets/lottie/weather_icons/index'
import {arrImage as arrImageParams} from '../../assets/lottie/weather_params/index'
import {forecastScreenKeys, Screens} from '../../languages/types'
import {IElementsForecast1Day} from '../../types/weatherTypes'
import {getImage} from '../../utils/getDynamicImage'

const arrParamsDescription = [
  'time',
  '',
  'temperature',
  'wind',
  'humidly',
  'weather',
]

const ForecastListItem_1: FC<IElementsForecast1Day> = ({list}) => {
  const styles = useStyle()

  const {t: t1} = useTranslation<Screens>('forecastScreen')
  const t = t1<forecastScreenKeys>

  return (
    <View style={styles.container}>
      <View style={styles.paramsContainer}>
        {arrParamsDescription.map(description => (
          <View style={styles.flex} key={description}>
            {description && (
              <Lottie
                source={getImage(description, arrImageParams)}
                style={styles.lottieParams}
                speed={0.7}
                autoPlay
                loop
              />
            )}
          </View>
        ))}
      </View>

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
            <Text h3>{Math.round(temp)} &deg;</Text>
          </View>

          <View style={styles.flex}>
            <Text h3>
              {Math.round(windSpeed)} {t('m_s')}
            </Text>
          </View>

          <View style={styles.flex}>
            <Text h3>{humidity} %</Text>
          </View>

          <View style={styles.flex}>
            <Text h3>{Math.round(pop * 100)} %</Text>
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
    height: '11.5%',
  },
  paramsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.8,
    borderColor: colors.secondary,
    height: '8%',
  },
  lottie: {
    width: 50,
  },
  lottieParams: {
    width: 40,
  },
  flex: {
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '16.7%',
  },
  secondBg: {
    backgroundColor: colors.secondary,
  },
}))
