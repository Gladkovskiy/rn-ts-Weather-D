import {Divider, Image, makeStyles, Text} from '@rneui/themed'
import React, {FC} from 'react'
import {View, ScrollView} from 'react-native'
import {IElementsForecast1Day} from '../../types/weatherTypes'
import {getHourAndMin, getSringMonth} from '../../utils/date'
import {getImage} from '../../utils/getDynamicImage'
import {arrImage} from '../../assets/weatherIcons'

const ForecastListItem: FC<IElementsForecast1Day> = ({list, date}) => {
  const styles = useStyle()

  return (
    <View style={styles.container}>
      <Text h3 style={{textAlign: 'center'}}>
        {getSringMonth(date)}
      </Text>

      <Divider width={2} style={{marginTop: 10, marginBottom: 20}} />
      <ScrollView
        style={styles.oneDay}
        horizontal={true}
        persistentScrollbar={true}>
        {list.map(({dt, humidity, icon, temp, windSpeed, pop}, i) => (
          <View key={i} style={styles.threeHouerItem}>
            <Text h3>{getHourAndMin(dt)}</Text>
            <Image source={getImage(icon, arrImage)} style={styles.icon} />
            <Text h3 style={styles.marginTop}>
              {temp}
            </Text>
            <Text h3 style={styles.marginTop}>
              {windSpeed}
            </Text>
            <Text h3 style={styles.marginTop}>
              {humidity}
            </Text>
            <Text h3 style={styles.marginTop}>
              {pop * 100}
            </Text>
          </View>
        ))}
      </ScrollView>

      <Text style={[styles.textAbsolute, styles.temperaturePosition]}>
        Температура, C&#176;
      </Text>
      <Text style={[styles.textAbsolute, styles.windPosition]}>
        Скорость ветра, м/с
      </Text>
      <Text style={[styles.textAbsolute, styles.humidityPosition]}>
        Влажность воздуха, %
      </Text>
      <Text style={[styles.textAbsolute, styles.popPosition]}>
        Вероятность осадков, %
      </Text>
    </View>
  )
}

export default ForecastListItem

const useStyle = makeStyles(theme => ({
  container: {
    marginVertical: 30,
    marginHorizontal: 5,
  },
  oneDay: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  threeHouerItem: {
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  icon: {
    width: 70,
    height: 40,
    marginVertical: 10,
  },
  marginTop: {
    marginTop: 20,
  },
  textAbsolute: {
    position: 'absolute',
    color: theme.colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperaturePosition: {
    top: '43%',
    left: '35%',
  },
  windPosition: {
    top: '56%',
    left: '30%',
  },
  humidityPosition: {
    top: '70%',
    left: '30%',
  },
  popPosition: {
    top: '84%',
    left: '29%',
  },
  bgColorPrimary: {
    backgroundColor: theme.colors.primary,
  },
}))
