import {TabView, Text} from '@rneui/themed'
import React, {FC} from 'react'
import {IElementsForecast1Day} from '../../types/weatherTypes'
import ForecastListItem from './ForecastListItem'

interface ITabViewWeather {
  forecast: IElementsForecast1Day[]
  index: number
}

const TabViewWeather: FC<ITabViewWeather> = ({forecast, index}) => {
  return (
    <TabView value={index} animationType="spring" disableSwipe>
      {forecast.map(item => (
        <TabView.Item key={item.date}>
          <ForecastListItem {...item} />
        </TabView.Item>
      ))}
    </TabView>
  )
}

export default TabViewWeather
