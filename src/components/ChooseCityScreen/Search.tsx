import {useNavigation} from '@react-navigation/native'
import {Input} from '@rneui/base'
import {Button, Icon, makeStyles, Text, useTheme} from '@rneui/themed'
import React, {createRef, FC, useContext, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Pressable, TextInput, View} from 'react-native'
import {useGeocoding} from '../../http/query/useWeather'
import {Screens, searchScreenKeys} from '../../languages/types'
import {NavigationProps} from '../../types/reactNavigation'
import {ILang} from '../../types/weatherTypes'
import {GlobalContext} from '../GlobalContextProvider'
interface IStyles {
  focus: boolean | undefined
}

const Search: FC = () => {
  const [focus, setFocus] = useState(false)
  const [searchCity, setSearchCity] = useState('')
  const ref = createRef<Input & TextInput>()
  const styles = useStyles({focus})
  const {
    theme: {colors},
  } = useTheme()
  const {
    i18n: {language},
  } = useTranslation()
  const {t: t1} = useTranslation<Screens>('searchScreen')
  const t = t1<searchScreenKeys>
  const cityName = useGeocoding(searchCity)
  const {setCityName, setCoordinates} = useContext(GlobalContext)
  const {navigate} = useNavigation<NavigationProps>()

  return (
    <View style={styles.container}>
      <View>
        <Input
          ref={ref}
          value={searchCity}
          onChangeText={text => setSearchCity(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          maxLength={20}
          placeholder={t('placeholderSearchInput')}
          leftIcon={
            <Icon
              type="material"
              name="search"
              color={focus ? colors.white : colors.grey3}
            />
          }
          inputContainerStyle={styles.inputContainerStyle}
          style={styles.inputText}
          placeholderTextColor={focus ? colors.white : colors.grey3}
        />

        {searchCity.length > 0 && (
          <Pressable
            style={styles.cancelSearch}
            onTouchEnd={e => {
              e.stopPropagation()
              setSearchCity('')
            }}>
            <Icon
              type="material"
              name="close"
              color={focus ? colors.white : colors.grey3}
            />
          </Pressable>
        )}
      </View>
      <Button
        title={t('search')}
        onPress={() => {
          ref.current?.blur()
          cityName.refetch()
        }}
        loading={
          cityName.fetchStatus === 'fetching' && cityName.status === 'loading'
        }
      />

      <View
        style={styles.searchLitsContainer}
        onTouchStart={() => {
          ref.current?.blur()
        }}>
        {cityName.isSuccess &&
          cityName.data.map(city => (
            <View key={city.lat}>
              <Button
                color={'secondary'}
                onPress={() => {
                  setCityName(
                    city.local_names || {ru: city.name, en: city.name},
                  )
                  setCoordinates({lat: city.lat, lng: city.lon})
                  navigate('Main')
                }}>
                <Text h4>
                  {city.local_names?.[language as keyof ILang] || city.name}
                </Text>
                <Text h4> {city.country} </Text>
                <Text h4> {city.state} </Text>
              </Button>
            </View>
          ))}
      </View>
    </View>
  )
}

export default Search

const useStyles = makeStyles(({colors}, props: IStyles) => ({
  container: {
    flex: 1,
  },
  inputContainerStyle: {
    borderBottomColor: props.focus ? colors.white : colors.grey3,
  },
  inputText: {
    color: props.focus ? colors.white : colors.grey3,
  },
  cancelSearch: {
    position: 'absolute',
    top: '18%',
    left: '90%',
  },
  searchLitsContainer: {
    marginTop: 20,
    flex: 1,
  },
}))
