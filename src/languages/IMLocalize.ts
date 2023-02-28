import i18n, {LanguageDetectorAsyncModule} from 'i18next'
import {initReactI18next} from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as RNLocalize from 'react-native-localize'

import en from './en'
import ru from './ru'

const languages = {
  en,
  ru,
}

const langCodes = Object.keys(languages)

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('userLanguage', (err, language) => {
      if (err || !language) {
        const availableLanguage =
          RNLocalize.findBestAvailableLanguage(langCodes)

        callback(availableLanguage?.languageTag || 'en')
        return
      }
      callback(language)
    })
  },
  cacheUserLanguage: language => {
    AsyncStorage.setItem('userLanguage', language)
  },
}

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: languages,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  })
