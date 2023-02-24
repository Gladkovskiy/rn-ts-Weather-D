import {makeStyles, Text} from '@rneui/themed'
import React, {FC} from 'react'
import {View} from 'react-native'
import RefreshButton from './RefreshButton'

interface IError {
  isLoading: boolean
}

const Error: FC<IError> = ({isLoading}) => {
  const styles = useStyle()

  return (
    <View style={styles.container}>
      <Text h3>Проверьте связь с интернетом</Text>
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
