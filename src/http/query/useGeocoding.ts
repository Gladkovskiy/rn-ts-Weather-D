import {useQuery} from '@tanstack/react-query'
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
  const query = useQuery(
    ['geocoding', cityName],
    () => getGeocoding(cityName),
    {
      enabled: false,
    },
  )

  return query
}
