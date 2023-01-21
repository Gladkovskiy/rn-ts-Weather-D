import {useNavigation} from '@react-navigation/native'
import {Icon} from '@rneui/themed'
import React, {FC} from 'react'
import {TouchableOpacity} from 'react-native'
import {NavigationProps} from '../../types/reactNavigation'
import {ROUTES} from '../../types/routes'

const ButtonSearchCity: FC = () => {
  const {navigate} = useNavigation<NavigationProps>()
  return (
    <TouchableOpacity onPress={() => navigate(ROUTES.CHOOSE_CITY)}>
      <Icon
        type="material-community"
        name="map-search-outline"
        size={30}
        color={'white'}
      />
    </TouchableOpacity>
  )
}

export default ButtonSearchCity
