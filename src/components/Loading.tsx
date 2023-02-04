import React, {FC} from 'react'
import Lottie from 'lottie-react-native'
import {makeStyles} from '@rneui/themed'
import {View} from 'react-native'

interface ILoading {
  size?: 'small' | 'normal' | 'big'
}

const Loading: FC<ILoading> = ({size = 'normal'}) => {
  const styles = useStyle({size})
  return (
    <View style={styles.container}>
      <Lottie
        source={require('../assets/lottie/loading.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  )
}

export default Loading

const useStyle = makeStyles((theme, {size}: ILoading) => ({
  lottie: {
    width: size === 'big' ? 200 : size === 'small' ? 100 : 150,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
