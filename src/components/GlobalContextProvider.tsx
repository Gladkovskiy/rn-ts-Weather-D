import React, {FC, createContext, useState, PropsWithChildren} from 'react'
import {useStorageState} from '../hooks/useStorageState'
import {ILocation} from '../types/googlePlaceApi'

interface IGlobalContext {
  locationPermission: boolean
  setLocationPermission: (x: boolean) => void
  coordinates: ILocation
  setCoordinates: (data: ILocation) => void
  cityName: string
  setCityName: (cityName: string) => void
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

const GlobalContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [locationPermission, setLocationPermission] = useState(false)

  const [coordinates, setCoordinates] = useStorageState('coordinates', {
    lat: 48.73,
    lng: 37.58,
  })

  const [cityName, setCityName] = useStorageState('cityName', '')

  return (
    <GlobalContext.Provider
      value={{
        locationPermission,
        setLocationPermission,
        coordinates,
        setCoordinates,
        cityName,
        setCityName,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
