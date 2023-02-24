import {makeStyles, Text} from '@rneui/themed'
import React, {FC} from 'react'
import {TouchableOpacity, View} from 'react-native'
import {IPredict} from '../../types/googlePlaceApi'

interface IProps {
  func: (cityName: string) => void
  predictions: IPredict[]
}

const SearchList: FC<IProps> = ({predictions, func}) => {
  const styles = useStyle()

  return (
    <View>
      {predictions.map(({description}) => (
        <React.Fragment key={description}>
          <TouchableOpacity
            onPress={() => func(description)}
            style={styles.listItem}>
            <Text style={styles.textStyle}>{description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      ))}
    </View>
  )
}

export default SearchList

const useStyle = makeStyles(({colors}) => ({
  textStyle: {
    color: colors.white,
    fontSize: 16,
  },
  listItem: {
    margin: 10,
  },
}))
