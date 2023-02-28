import {makeStyles, Text} from '@rneui/themed'
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {View} from 'react-native'
import {mainScreenKeys, Screens} from '../languages/types'
import RefreshButton from './RefreshButton'

interface IError {
  isLoading: boolean
}

const Error: FC<IError> = ({isLoading}) => {
  const styles = useStyle()
  const {t: t1} = useTranslation<Screens>('mainScreen')
  const t = t1<mainScreenKeys>

  return (
    <View style={styles.container}>
      <Text h3>{t('errorEnternet')}</Text>
      <RefreshButton isLoading={isLoading} />
    </View>
  )
}

export default Error

const useStyle = makeStyles(() => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
