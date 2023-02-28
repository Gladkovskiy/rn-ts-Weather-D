export const withoutComma = (cityName: string): string => {
  const name = cityName.split(',')[0]

  return name
}
