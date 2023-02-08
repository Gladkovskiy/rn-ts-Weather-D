import {Button, Icon, makeStyles, Text} from '@rneui/themed'
import Lottie from 'lottie-react-native'
import React, {FC, useMemo} from 'react'
import {View} from 'react-native'
import {arrImage} from '../../assets/lottie/weather_icons/index'
import {arrImage as arrWeatherParams} from '../../assets/lottie/weather_params/index'
import {ICurrentWeather} from '../../types/weatherTypes'
import {dateToMonth, getHourAndMin} from '../../utils/date'
import {getImage} from '../../utils/getDynamicImage'
import ControlledTooltip from '../ControlledTooltip'

interface CurrentWeatherProps {
  data: ICurrentWeather
  isLoading: boolean
  refetch: () => void
}

interface IWeatherParam {
  value: string
  toolTipText: string
  icon: string
  speed?: number
}

const CurrentWeather: FC<CurrentWeatherProps> = ({
  data: {main, weather, wind, visibility, name},
  isLoading,
  refetch,
}) => {
  const styles = useStyle()
  const weatherParams: IWeatherParam[] = useMemo(
    () => [
      {
        value: `${main.humidity} %`,
        toolTipText: 'Влажность',
        icon: 'humidly',
      },
      {
        value: `${Math.round(wind.speed)} м/с`,
        toolTipText: 'Скорость ветра',
        icon: 'wind',
        speed: 0.6,
      },
      {
        value: `${main.pressure} мБар`,
        toolTipText: 'Давление',
        icon: 'air-pressure',
        speed: 1.3,
      },
      {
        value: `${visibility} м`,
        toolTipText: 'Видимость',
        icon: 'visibility',
        speed: 0.6,
      },
    ],
    [main, visibility, wind],
  )

  return (
    <View style={styles.container}>
      <Text h2>{name}</Text>
      <Text h3>{dateToMonth(Date.now())}</Text>

      <View style={styles.timeContainer}>
        <Text h3 style={styles.weatherTime}>
          {getHourAndMin(Date.now())}
        </Text>
        <Button
          buttonStyle={styles.refreshButton}
          color="primary"
          onPress={refetch}
          loading={isLoading}>
          <Icon type="font-awesome" name="refresh" color="white" size={20} />
        </Button>
      </View>

      <Lottie
        source={getImage(weather[0].icon, arrImage)}
        style={styles.weatherIcon}
        autoPlay
        loop
      />

      <View style={styles.mainTemp}>
        <Text h1>{main.temp.toFixed(1)} &#176;</Text>

        <View style={{marginLeft: 10}}>
          <Text h4>{weather[0].description}</Text>
          <Text h4>чувствуется как {Math.round(main.feels_like)} &#176;</Text>
        </View>
      </View>

      <View style={styles.weatherParams}>
        {weatherParams.map(({icon, toolTipText, value, speed = 1}) => (
          <View style={styles.weatherParam} key={value}>
            <ControlledTooltip
              popover={<Text style={styles.whiteText}>{toolTipText}</Text>}>
              <Lottie
                source={getImage(icon, arrWeatherParams)}
                style={{width: 50}}
                autoPlay
                loop
                speed={speed}
              />
            </ControlledTooltip>
            <Text h3>{value}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default CurrentWeather

const useStyle = makeStyles(theme => ({
  weatherIcon: {
    height: 200,
    width: 200,
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
    marginVertical: 20,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  weatherParam: {
    marginVertical: 5,
    flexDirection: 'row',
    flex: 1,
    flexBasis: '50%',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
}))
