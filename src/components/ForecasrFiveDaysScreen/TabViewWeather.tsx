import {makeStyles} from '@rneui/base'
import {TabView} from '@rneui/themed'
import React, {FC} from 'react'
import {IElementsForecast1Day} from '../../types/weatherTypes'
import ForecastListItem_1 from './ForecastListItem_1'

interface ITabViewWeather {
  forecast: IElementsForecast1Day[]
  tabNumber: number
  changeTabNumber: (index: number) => void
}

const TabViewWeather: FC<ITabViewWeather> = ({
  forecast,
  tabNumber,
  changeTabNumber,
}) => {
  const styles = useStyle()

  return (
    <TabView
      value={tabNumber}
      onChange={index => changeTabNumber(index)}
      animationType="spring">
      {forecast.map(item => (
        <TabView.Item key={item.date} style={styles.tabContainer}>
          <ForecastListItem_1 {...item} />
        </TabView.Item>
      ))}
    </TabView>
  )
}

export default TabViewWeather

const useStyle = makeStyles(() => ({
  tabContainer: {
    flex: 1,
  },
}))
