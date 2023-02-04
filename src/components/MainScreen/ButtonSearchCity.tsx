import {useNavigation} from '@react-navigation/native'
import {Icon, makeStyles} from '@rneui/themed'
import React, {FC} from 'react'
import {TouchableOpacity} from 'react-native'
import {NavigationProps} from '../../types/reactNavigation'
import {ROUTES} from '../../types/routes'
import Lottie from 'lottie-react-native'

const ButtonSearchCity: FC = () => {
  const {navigate} = useNavigation<NavigationProps>()
  const styles = useStyle()

  return (
    <TouchableOpacity onPress={() => navigate(ROUTES.CHOOSE_CITY)}>
      <Lottie
        source={require('../../assets/lottie/search.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </TouchableOpacity>
  )
}

export default ButtonSearchCity

const useStyle = makeStyles(() => ({
  lottie: {
    width: 70,
  },
}))
