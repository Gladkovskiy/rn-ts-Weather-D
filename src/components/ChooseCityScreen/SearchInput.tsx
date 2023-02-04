import {Input} from '@rneui/base'
import {Icon, makeStyles, useTheme} from '@rneui/themed'
import React, {createRef, FC, useEffect, useState} from 'react'
import {ActivityIndicator, Pressable, TextInput, View} from 'react-native'
import {useAutocomplete} from '../../http/query/useGeocoding'
import {IPredict} from '../../types/googlePlaceApi'
import SearchList from './SearchList'

interface IStyles {
  focus: boolean | undefined
}

const mokPrediction: IPredict[] = [
  {
    description: 'Краматорск, Донецкая область, Украина',
  },
  {
    description: 'Крамарка, Днепропетровская область, Украина',
  },
  {
    description: 'Крамаренки, Полтавская область, Украина',
  },
]

const SearchInput: FC = () => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')
  const ref = createRef<Input & TextInput>()
  const autocompleteApi = useAutocomplete(value)
  const styles = useStyles({focus})
  const {
    theme: {colors},
  } = useTheme()

  useEffect(() => {
    if (value.length > 3) {
      autocompleteApi.refetch()
      console.log('fetch')
    }
  }, [value])

  return (
    <View style={styles.container} onTouchStart={() => ref.current?.blur()}>
      <View>
        <Input
          ref={ref}
          value={value}
          onChangeText={text => setValue(text)}
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

        {value.length > 0 && (
          <Pressable
            style={styles.cancelSearch}
            onTouchStart={e => {
              e.stopPropagation()
              setValue('')
            }}>
            <Icon
              type="material"
              name="close"
              color={focus ? colors.white : colors.grey3}
            />
          </Pressable>
        )}

        {/* добавить loading в animation */}
        <ActivityIndicator
          size="small"
          style={styles.loading}
          animating={autocompleteApi.isFetching}
        />
      </View>

      {autocompleteApi.data && (
        <SearchList
          predictions={autocompleteApi.data}
          func={cityName => console.log(cityName)}
        />
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
  },
}))
