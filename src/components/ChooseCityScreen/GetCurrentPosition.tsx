import Geolocation from '@react-native-community/geolocation'
import {useNavigation} from '@react-navigation/native'
import {Button, Dialog, Icon, makeStyles, Text, useTheme} from '@rneui/themed'
import React, {FC, useContext, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {TouchableOpacity, View} from 'react-native'
import {Screens, searchScreenKeys} from '../../languages/types'
import {NavigationProps} from '../../types/reactNavigation'
import {ROUTES} from '../../types/routes'
import {GlobalContext} from '../GlobalContextProvider'

const GetCurrentPosition: FC = () => {
  const styles = useStyle()
  const {
    theme: {colors},
  } = useTheme()

  const {locationPermission, setCoordinates, setCityName} =
    useContext(GlobalContext)

  const [error, setError] = useState({visible: false, message: ''})
  const [loadingPosition, setLoadingPosition] = useState(false)

  const {navigate} = useNavigation<NavigationProps>()

  const {t: translate} = useTranslation<Screens>('searchScreen')
  const t = translate<searchScreenKeys>

  const getPosition = () => {
    setLoadingPosition(true)

    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setCoordinates({lat: latitude, lng: longitude})
        setCityName('')
        setLoadingPosition(false)
        navigate(ROUTES.MAIN)
      },
      ({message, code}) => {
        if (code === 2) {
          setError({visible: true, message: 'Включите определение локации'})
        } else {
          setError({visible: true, message})
        }
        setLoadingPosition(false)
      },
      {
        timeout: 10000,
        // maximumAge: 0,
        enableHighAccuracy: false,
      },
    )
  }

  return (
    <>
      <Button
        onPress={getPosition}
        title={locationPermission ? t('weatherByLocation') : t('noPermission')}
        disabled={!locationPermission}
        loading={loadingPosition}
      />

      <Dialog
        isVisible={error.visible}
        onBackdropPress={() => setError(state => ({...state, visible: false}))}
        overlayStyle={styles.dialog}>
        <View style={styles.errorContainer}>
          <Icon
            name="warning"
            type="antdesign"
            color={colors.error}
            size={30}
            style={styles.icon}
          />

          <Text h4>{error.message}</Text>
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => setError(state => ({...state, visible: false}))}>
          <Icon name="close" type="antdesign" color={colors.white} />
        </TouchableOpacity>
      </Dialog>
    </>
  )
}

export default GetCurrentPosition

const useStyle = makeStyles(theme => ({
  dialog: {
    backgroundColor: theme.colors.background,
  },
  errorContainer: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  close: {
    position: 'absolute',
    top: '0%',
    left: '105%',
  },
  icon: {
    marginRight: 10,
  },
}))
