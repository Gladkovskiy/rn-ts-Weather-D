interface IAppInfo {
  version: string
  data: string
  developed: string
}

export interface IMainScreen {
  feelsLike: string
  english: string
  russian: string
  language: string
  humidity: string
  wind: string
  pressure: string
  visibility: string
  forecastButton: string
  appInfo: IAppInfo
  m_s: string
  mBar: string
  m: string
}

export interface ISearchScreen {
  weatherByLocation: string
  noPermission: string
  placeholderSearchInput: string
  screenTitle: string
  locationError: string
}

export interface IForecastScreen {
  m_s: string
}

export interface IRoutTitle {
  forecastScreen: string
  searchScreen: string
}

interface IFileStructure {
  mainScreen: string
  searchScreen: string
  forecastScreen: string
  routeTitle: string
}

export type Screens = keyof IFileStructure

export type mainScreenKeys = keyof IMainScreen
export type AppInfo = keyof IAppInfo
export type searchScreenKeys = keyof ISearchScreen
export type forecastScreenKeys = keyof IForecastScreen
export type RoutTitleKeys = keyof IRoutTitle
