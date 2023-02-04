import axios from 'axios'
import {WEATHER_API_KEY, GOOGLE_API_KEY} from '@env'

export const $weatherHost = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: WEATHER_API_KEY,
    units: 'metric',
    lang: 'ru',
  },
})

export enum WeatherPath {
  CURRENT_WEATHER = '/weather',
  FORECAST_WEATHER = '/forecast',
}

export const $geocodingHost = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place',
  params: {
    key: GOOGLE_API_KEY,
    language: 'ru',
  },
})

export enum GooglePath {
  AUTOCOMPLETE = '/autocomplete/json',
  GEOCODING = '/findplacefromtext/json',
}
