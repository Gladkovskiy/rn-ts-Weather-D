import {IAutocomplete, IGeocoding} from '../../types/googlePlaceApi'
import {$geocodingHost, GooglePath} from './index'

export const getAutocomplete = async (search: string) => {
  const {
    data: {predictions},
  } = await $geocodingHost.get<IAutocomplete>(GooglePath.AUTOCOMPLETE, {
    params: {
      types: 'locality',
      components: 'country:ua|country:ru',
      input: search,
    },
  })

  return predictions
}

export const getGeocoding = async (cityName: string) => {
  const {
    data: {candidates},
  } = await $geocodingHost.get<IGeocoding>(GooglePath.GEOCODING, {
    params: {
      fields: 'name,geometry',
      inputtype: 'textquery',
      input: cityName,
    },
  })
  return candidates[0]
}
