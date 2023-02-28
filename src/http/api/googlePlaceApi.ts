import {
  IAutocomplete,
  IGeocoding,
  IGetCityName,
  ILocation,
} from '../../types/googlePlaceApi'
import {$geocodingHost, $getCityNameHost, GooglePath} from './index'

export const getAutocomplete = async (search: string, lang: string) => {
  const {
    data: {predictions},
  } = await $geocodingHost.get<IAutocomplete>(GooglePath.AUTOCOMPLETE, {
    params: {
      types: 'locality',
      // components: 'country:ua|country:ru',
      input: search,
      language: lang,
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

export const getCityName = async (coordinates: ILocation, lang: string) => {
  const {
    data: {results},
  } = await $getCityNameHost.get<IGetCityName>('', {
    params: {
      latlng: `${coordinates.lat},${coordinates.lng}`,
      language: lang,
    },
  })

  return results[0]
}
