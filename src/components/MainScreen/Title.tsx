import React, {FC} from 'react'
import Lottie from 'lottie-react-native'
import {makeStyles} from '@rneui/themed'

const Title: FC = () => {
  const styles = useStyle()

  return (
    <Lottie
      source={require('../../assets/lottie/title.json')}
      autoPlay
      loop
      style={styles.lottie}
    />
  )
}

export default Title

const useStyle = makeStyles(() => ({
  lottie: {
    width: 80,
  },
}))
