import {useNavigation} from '@react-navigation/native'
import {useQuery} from '@tanstack/react-query'
import {useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {GlobalContext} from '../../components/GlobalContextProvider'
import {NavigationProps} from '../../types/reactNavigation'
import {ROUTES} from '../../types/routes'
import {withoutComma} from '../../utils/string'
import {getAutocomplete, getCityName, getGeocoding} from '../api/googlePlaceApi'

export const useAutocomplete = (search: string, lang: string) => {
  const query = useQuery(
    ['autocomplete', search, lang],
    () => getAutocomplete(search, lang),
    {
      enabled: false,
    },
  )

  return query
}

export const useGeocoding = (cityName: string) => {
  const {setCoordinates, setCityName} = useContext(GlobalContext)
  const {navigate} = useNavigation<NavigationProps>()
  const query = useQuery(
    ['geocoding', cityName],
    () => getGeocoding(cityName),
    {
      enabled: false,
      onSuccess: ({
        geometry: {
          location: {lat, lng},
        },
      }) => {
        setCityName(withoutComma(cityName))
        setCoordinates({lat, lng})
        navigate(ROUTES.MAIN)
      },
    },
  )

  return query
}

export const useCityName = () => {
  const {coordinates, setCityName} = useContext(GlobalContext)
  const {
    i18n: {language},
  } = useTranslation()

  const query = useQuery(
    ['cityName', coordinates, language],
    () => getCityName(coordinates, language),
    {
      enabled: false,
      onSuccess: ({formatted_address}) => {
        setCityName(withoutComma(formatted_address))
      },
    },
  )

  return query
}
