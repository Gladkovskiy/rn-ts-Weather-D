import {makeStyles, Text} from '@rneui/themed'
import React, {FC, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {View} from 'react-native'
import {mainScreenKeys, Screens} from '../languages/types'
import NetInfo from '@react-native-community/netinfo'

interface IError {
  refetchFn: () => void
}

const Error: FC<IError> = ({refetchFn}) => {
  const styles = useStyle()
  const {t: t1} = useTranslation<Screens>('mainScreen')
  const t = t1<mainScreenKeys>

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) refetchFn()
    })

    return () => unsubscribe()
  }, [])

  return (
    <View style={styles.container}>
      <Text h3>{t('errorEnternet')}</Text>
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
