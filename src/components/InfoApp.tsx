import {Dialog, Icon, makeStyles, Text, useTheme} from '@rneui/themed'
import React, {FC, useState} from 'react'
import {TouchableOpacity, View, Linking} from 'react-native'

const InfoApp: FC = () => {
  const {
    theme: {colors},
  } = useTheme()
  const styles = useStyle()
  const [visible, setVisible] = useState(false)

  const createLink = async (reference: string) => {
    await Linking.openURL(reference)
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.iconPosition}>
        <Icon name="info" size={30} color={colors.secondary} />
      </TouchableOpacity>

      <Dialog
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        overlayStyle={styles.dialog}>
        <View style={styles.errorContainer}>
          <TouchableOpacity
            onPress={() => createLink('https://github.com/Gladkovskiy')}>
            <Text style={styles.text}>
              Разработано:{'  '}
              <Text style={[styles.text, styles.textUnderline]}>
                github.com/Gladkovskiy
              </Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => createLink('https://openweathermap.org/')}>
            <Text style={styles.text}>
              Данные:{'  '}
              <Text style={[styles.text, styles.textUnderline]}>
                openweathermap.org
              </Text>
            </Text>
          </TouchableOpacity>

          <Text style={styles.text}>Версия: 1.0.0</Text>
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => setVisible(false)}>
          <Icon name="close" type="antdesign" color={colors.white} />
        </TouchableOpacity>
      </Dialog>
    </>
  )
}

export default InfoApp

const useStyle = makeStyles(({colors}) => ({
  iconPosition: {
    alignItems: 'flex-end',
    margin: 4,
  },
  dialog: {
    backgroundColor: colors.background,
    width: '90%',
  },
  errorContainer: {
    backgroundColor: colors.background,
    padding: 10,
  },
  close: {
    position: 'absolute',
    top: '0%',
    left: '105%',
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
}))
