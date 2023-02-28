import {makeStyles, Tab, Text} from '@rneui/themed'
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {IElementsForecast1Day} from '../../types/weatherTypes'
import {getShortNameOfDate} from '../../utils/date'
import {minMaxTemp} from '../../utils/Temperature'

interface ITabItem {
  forecast: IElementsForecast1Day[]
  index: number
  setIndex: (e: number) => void
}

const TabItem: FC<ITabItem> = ({forecast, index, setIndex}) => {
  const styles = useStyle()
  const {
    i18n: {language},
  } = useTranslation()

  return (
    <Tab value={index} onChange={e => setIndex(e)} variant="primary" dense>
      {forecast.map(({date, list}) => (
        <Tab.Item key={date}>
          {date}
          {getShortNameOfDate(date, language)}
          <Text style={styles.minMax}>{minMaxTemp(list, 'min')}&#176;</Text>
          <Text style={styles.minMax}>{minMaxTemp(list, 'max')}&#176;</Text>
        </Tab.Item>
      ))}
    </Tab>
  )
}

export default TabItem

const useStyle = makeStyles(({colors}) => ({
  minMax: {
    fontSize: 16,
    color: colors.white,
  },
}))
