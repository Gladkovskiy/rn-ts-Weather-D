import {Tab, Text} from '@rneui/themed'
import React, {FC} from 'react'
import {IElementsForecast1Day} from '../../types/weatherTypes'
import {minMaxTemp} from '../../utils/Temperature'

interface ITabItem {
  forecast: IElementsForecast1Day[]
  index: number
  setIndex: (e: number) => void
}

const TabItem: FC<ITabItem> = ({forecast, index, setIndex}) => {
  return (
    <Tab value={index} onChange={e => setIndex(e)} variant="primary" dense>
      {forecast.map(({date, list}) => (
        <Tab.Item key={date}>
          {date}{' '}
          <Text style={{fontSize: 15, color: 'white'}}>
            {minMaxTemp(list, 'min')}&#176;..{minMaxTemp(list, 'max')}&#176;
          </Text>{' '}
        </Tab.Item>
      ))}
    </Tab>
  )
}

export default TabItem
