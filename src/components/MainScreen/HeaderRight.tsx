import {makeStyles} from '@rneui/themed'
import React, {FC} from 'react'
import {View} from 'react-native'
import ButtonSearchCity from './ButtonSearchCity'
import SelectLanguages from './SelectLanguages'

const HeaderRight: FC = () => {
  const styles = useStyle()

  return (
    <View style={styles.container}>
      <SelectLanguages />
      <ButtonSearchCity />
    </View>
  )
}

export default HeaderRight

const useStyle = makeStyles(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}))
