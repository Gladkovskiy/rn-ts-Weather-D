import {Divider, ListItem, makeStyles, SearchBar, Text} from '@rneui/themed'
import React, {useState} from 'react'
import {TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

const mokCity = [
  'Kramatorsk',
  'Kramatorsk',
  'Kramatorsk',
  'Kramatorsk',
  'Kramatorsk',
]

const ChooseCity = () => {
  const [search, setSearch] = useState('')
  const styles = useStyle()
  const setCity = (text: string) => setSearch(text)

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        inputStyle={{color: 'white'}}
        placeholderTextColor="white"
        value={search}
        onChangeText={setCity}
        platform="android"
        placeholder="Найти город"
      />
      <Divider width={1} />

      <View style={styles.listContainer}>
        {mokCity.map((city, index) => (
          <TouchableOpacity key={index}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>
                  <Text style={styles.cityName}>
                    <Text style={styles.boldText}>{search}</Text>
                    {city.slice(search.length)}
                  </Text>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <Divider width={1} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default ChooseCity

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContainer: {
    marginVertical: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'white',
  },
  cityName: {
    color: theme.colors.grey2,
  },
}))
