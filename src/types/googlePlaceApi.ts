export interface IPredict {
  description: string
}

export interface IAutocomplete {
  predictions: IPredict[]
}

export interface ILocation {
  lat: number
  lng: number
}

export interface ICandidat {
  geometry: {
    location: ILocation
  }
  name: string
}

export interface IGeocoding {
  candidates: ICandidat[]
}
