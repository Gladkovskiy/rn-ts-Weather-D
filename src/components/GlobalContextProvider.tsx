import React, {FC, createContext, useState, PropsWithChildren} from 'react'

interface IGlobalContext {
  locationPermission: boolean
  setLocationPermission: (x: boolean) => void
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

const GlobalContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [locationPermission, setLocationPermission] = useState(false)
  return (
    <GlobalContext.Provider value={{locationPermission, setLocationPermission}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
