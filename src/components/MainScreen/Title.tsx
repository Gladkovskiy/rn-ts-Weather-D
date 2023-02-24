import {Image, makeStyles} from '@rneui/themed'
import React, {FC} from 'react'

const Title: FC = () => {
  const styles = useStyle()

  return (
    <Image
      source={require('../../assets/weather-app.png')}
      style={styles.image}
    />
  )
}

export default Title

const useStyle = makeStyles(() => ({
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
}))
