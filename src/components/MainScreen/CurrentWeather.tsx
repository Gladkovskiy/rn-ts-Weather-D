import {makeStyles, Text} from '@rneui/themed'
import Lottie from 'lottie-react-native'
import React, {FC, useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {View} from 'react-native'
import {arrImage} from '../../assets/lottie/weather_icons/index'
import {Screens} from '../../languages/types'
import {
  ICurrentWeather,
  IElementsForecast1Day,
  ILang,
} from '../../types/weatherTypes'
import {dateToMonth, getNameOfDay} from '../../utils/date'
import {getImage} from '../../utils/getDynamicImage'
import ForecastListItem_1 from '../ForecasrFiveDaysScreen/ForecastListItem_1'
import {GlobalContext} from '../GlobalContextProvider'

interface CurrentWeatherProps {
  currentWeather: ICurrentWeather
  forecastOneDay: IElementsForecast1Day
  isLoading: boolean
}

const CurrentWeather: FC<CurrentWeatherProps> = ({
  currentWeather,
  forecastOneDay,
}) => {
  const styles = useStyle()
  const {cityName} = useContext(GlobalContext)

  const {
    t,
    i18n: {language},
  } = useTranslation<Screens>('mainScreen')

  return (
    <View style={styles.container}>
      <Text h2>
        {cityName[language as keyof ILang] === ''
          ? currentWeather.name
          : cityName[language as keyof ILang]}
      </Text>
      <Text h3>{`${getNameOfDay(language)}, ${dateToMonth(language)}`}</Text>

      <Lottie
        source={getImage(currentWeather.weather[0].icon, arrImage)}
        style={styles.weatherIcon}
        autoPlay
        loop
      />

      <View style={styles.mainTemp}>
        <Text h1>{currentWeather.main.temp.toFixed(0)} &#176;</Text>

        <View style={styles.describeWeather}>
          <Text h4>{currentWeather.weather[0].description}</Text>
          <Text h4>
            {t('feelsLike')} {Math.round(currentWeather.main.feels_like)} &#176;
          </Text>
        </View>
      </View>

      <View style={styles.forecast}>
        <ForecastListItem_1 data={forecastOneDay} fontSize={18} />
      </View>
    </View>
  )
}

export default CurrentWeather

const useStyle = makeStyles(theme => ({
  weatherIcon: {
    width: 180,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  mainTemp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherParams: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  weatherParam: {
    flexDirection: 'row',
    flexBasis: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
  },
  whiteText: {
    color: theme.colors.white,
  },
  refreshButton: {
    borderRadius: 20,
  },
  weatherTime: {
    marginRight: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  describeWeather: {
    marginLeft: 10,
  },
  forecast: {
    flex: 1,
    marginTop: 25,
  },
}))
