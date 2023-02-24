import {Input} from '@rneui/base'
import {Icon, makeStyles, useTheme} from '@rneui/themed'
import React, {createRef, FC, useEffect, useState} from 'react'
import {ActivityIndicator, Pressable, TextInput, View} from 'react-native'
import {useAutocomplete, useGeocoding} from '../../http/query/useGeocoding'
import SearchList from './SearchList'

interface IStyles {
  focus: boolean | undefined
}

const SearchInput: FC = () => {
  const [focus, setFocus] = useState(false)
  const [searchCity, setSearchCity] = useState('')
  const [cityName, setCityName] = useState('')

  const ref = createRef<Input & TextInput>()
  const styles = useStyles({focus})
  const {
    theme: {colors},
  } = useTheme()

  const autocompleteApi = useAutocomplete(searchCity)
  const geocodingApi = useGeocoding(cityName)

  useEffect(() => {
    if (searchCity.length > 3) {
      autocompleteApi.refetch()
    }
  }, [searchCity])

  useEffect(() => {
    if (cityName) geocodingApi.refetch()
  }, [cityName])

  return (
    <View style={styles.container} onTouchStart={() => ref.current?.blur()}>
      <View>
        <Input
          ref={ref}
          value={searchCity}
          onChangeText={text => setSearchCity(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          maxLength={20}
          placeholder="Название города"
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

        <ActivityIndicator
          size="small"
          style={styles.loading}
          animating={autocompleteApi.isFetching}
          color={colors.white}
        />
      </View>

      {autocompleteApi.data && (
        <SearchList predictions={autocompleteApi.data} func={setCityName} />
      )}
    </View>
  )
}

export default SearchInput

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
  loading: {
    position: 'absolute',
    top: '21%',
    left: '85%',
    color: colors.white,
  },
}))
