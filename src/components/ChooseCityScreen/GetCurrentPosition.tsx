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
import {getFontSize} from '../../utils/fontSize'

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
        setCityName({ru: '', en: ''})
        setLoadingPosition(false)
        navigate(ROUTES.MAIN)
      },
      ({message, code}) => {
        if (code === 2) {
          setError({visible: true, message: t('locationError')})
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
      <View style={styles.container}>
        <Button
          onPress={getPosition}
          title={
            locationPermission ? t('weatherByLocation') : t('noPermission')
          }
          disabled={!locationPermission}
          loading={loadingPosition}
        />
      </View>

      <Dialog
        isVisible={error.visible}
        onBackdropPress={() => setError(state => ({...state, visible: false}))}
        overlayStyle={styles.dialog}>
        <View style={styles.errorContainer}>
          <Icon
            name="warning"
            type="antdesign"
            color={colors.error}
            size={getFontSize(30)}
            style={styles.icon}
          />

          <Text style={styles.errorText}>{error.message}</Text>
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
  container: {
    margin: 10,
    padding: 10,
  },
  dialog: {
    backgroundColor: theme.colors.background,
    width: '80%',
  },
  errorContainer: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: '5%',
    left: '105%',
  },
  icon: {
    marginRight: 10,
  },
  errorText: {
    fontSize: getFontSize(16),
    fontWeight: 'bold',
    color: theme.colors.white,
  },
}))
