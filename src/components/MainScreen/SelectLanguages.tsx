import {Dialog, Icon, makeStyles, Text, useTheme} from '@rneui/themed'
import React, {FC, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {TouchableOpacity} from 'react-native'
import {useCityName} from '../../http/query/useGeocoding'

const SelectLanguages: FC = () => {
  const {i18n, t} = useTranslation()
  const selectLanduages = i18n.language

  const [visible, setVisible] = useState(false)
  const styles = useStyle()
  const {
    theme: {colors},
  } = useTheme()

  const {refetch} = useCityName()

  const lang = [
    {code: 'en', label: t('mainScreen:english')},
    {code: 'ru', label: t('mainScreen:russian')},
  ]

  const setLanguage = (code: string) => {
    return () => {
      i18n.changeLanguage(code).then(() => {
        refetch()
        setVisible(false)
      })
    }
  }

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text h4 style={styles.language}>
          {t('mainScreen:language')}
        </Text>
      </TouchableOpacity>

      <Dialog
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        overlayStyle={styles.dialog}>
        {lang.map(({code, label}) => (
          <TouchableOpacity
            key={code}
            onPress={setLanguage(code)}
            disabled={code === selectLanduages}>
            <Text
              h4
              h4Style={{
                color: code === selectLanduages ? colors.grey3 : colors.white,
              }}
              style={styles.languages}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.close}
          onPress={() => setVisible(false)}>
          <Icon name="close" type="antdesign" color={colors.white} />
        </TouchableOpacity>
      </Dialog>
    </>
  )
}

export default SelectLanguages

const useStyle = makeStyles(({colors}) => ({
  dialog: {
    backgroundColor: colors.background,
  },
  close: {
    position: 'absolute',
    top: '0%',
    left: '105%',
  },
  language: {
    marginRight: 10,
  },
  languages: {
    textAlign: 'center',
  },
}))
