export const withoutComma = (cityName: string): string => {
  const name = cityName.split(' ')[0]
  if (name.includes(',')) {
    return name.slice(0, name.length - 1)
  } else {
    return name
  }
}

withoutComma('Киев')
