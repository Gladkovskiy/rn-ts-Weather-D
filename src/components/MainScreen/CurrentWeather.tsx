import {Icon, makeStyles, Text} from '@rneui/themed'
import Lottie from 'lottie-react-native'
import React, {FC} from 'react'
import {View} from 'react-native'
import {ICurrentWeather} from '../../types/weatherTypes'
import ControlledTooltip from '../ControlledTooltip'

interface CurrentWeatherProps {
  data: ICurrentWeather
}

interface IWeatherParam {
  value: string
  toolTipText: string
  icon: {
    name: string
    type: string
  }
}

const CurrentWeather: FC<CurrentWeatherProps> = ({
  data: {main, weather, wind, visibility, sys},
}) => {
  const styles = useStyle()
  const weatherParams: IWeatherParam[] = [
    {
      value: `${main.humidity} %`,
      toolTipText: 'Влажность',
      icon: {name: 'water', type: 'entypo'},
    },
    {
      value: `${wind.speed} м/с`,
      toolTipText: 'Скорость ветра',
      icon: {name: 'wind', type: 'feather'},
    },
    {
      value: `${main.pressure} мБар`,
      toolTipText: 'Давление',
      icon: {name: 'car-brake-low-pressure', type: 'material-community'},
    },
    {
      value: `${visibility} м`,
      toolTipText: 'Видимость',
      icon: {name: 'visibility', type: 'material'},
    },
    {
      value: new Date(sys.sunrise).toLocaleTimeString(),
      toolTipText: 'Восход',
      icon: {name: 'sunrise', type: 'feather'},
    },
    {
      value: new Date(sys.sunset).toLocaleTimeString(),
      toolTipText: 'Закат',
      icon: {name: 'sunset', type: 'feather'},
    },
  ]

  return (
    <View style={styles.container}>
      <Lottie
        source={require('../../assets/lottie/sunny.json')}
        style={styles.weatherIcon}
        autoPlay
        loop
      />

      <View style={styles.mainTemp}>
        <Text h1>{main.temp} &#176;</Text>

        <View style={{marginLeft: 10}}>
          <Text h4>{weather[0].description}</Text>
          <Text h4>чувствуется как {main.feels_like} &#176;</Text>
        </View>
      </View>

      <View style={styles.weatherParams}>
        {weatherParams.map(({icon, toolTipText, value}) => (
          <View style={styles.weatherParam} key={value}>
            <ControlledTooltip
              popover={<Text style={styles.whiteText}>{toolTipText}</Text>}>
              <Icon
                name={icon.name}
                type={icon.type}
                color={'white'}
                size={30}
                containerStyle={styles.icon}
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
}))
