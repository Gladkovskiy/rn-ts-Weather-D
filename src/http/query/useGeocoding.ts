import {useNavigation} from '@react-navigation/native'
import {useQuery} from '@tanstack/react-query'
import {useContext} from 'react'
import {GlobalContext} from '../../components/GlobalContextProvider'
import {NavigationProps} from '../../types/reactNavigation'
import {ROUTES} from '../../types/routes'
import {withoutComma} from '../../utils/string'
import {getAutocomplete, getGeocoding} from '../api/googlePlaceApi'

export const useAutocomplete = (search: string) => {
  const query = useQuery(
    ['autocomplete', search],
    () => getAutocomplete(search),
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
