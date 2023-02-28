interface Lang {
  en: string
  ru: string
}

interface IArrMonth {
  id: number
  name: Lang
}

const arrMonth: IArrMonth[] = [
  {id: 1, name: {ru: 'января', en: 'January'}},
  {id: 2, name: {ru: 'февраля', en: 'February'}},
  {id: 3, name: {ru: 'марта', en: 'March'}},
  {id: 4, name: {ru: 'апреля', en: 'April'}},
  {id: 5, name: {ru: 'мая', en: 'May'}},
  {id: 6, name: {ru: 'июня', en: 'June'}},
  {id: 7, name: {ru: 'июля', en: 'July'}},
  {id: 8, name: {ru: 'августа', en: 'August'}},
  {id: 9, name: {ru: 'сентября', en: 'September'}},
  {id: 10, name: {ru: 'октября', en: 'October'}},
  {id: 11, name: {ru: 'ноября', en: 'November'}},
  {id: 12, name: {ru: 'декабря', en: 'December'}},
]

interface IArrDay {
  id: number
  name: string
  shortName: Lang
}

const arrDay: IArrDay[] = [
  {id: 1, name: 'понедельник', shortName: {ru: 'Пн', en: 'Mon'}},
  {id: 2, name: 'вторник', shortName: {ru: 'Вт', en: 'Tue'}},
  {id: 3, name: 'среда', shortName: {ru: 'Ср', en: 'Wed'}},
  {id: 4, name: 'четверг', shortName: {ru: 'Чт', en: 'Thu'}},
  {id: 5, name: 'пятница', shortName: {ru: 'Пт', en: 'Fri'}},
  {id: 6, name: 'суббота', shortName: {ru: 'Сб', en: 'Sat'}},
  {id: 0, name: 'воскресенье', shortName: {ru: 'Вс', en: 'Sun'}},
]

export const dateToMonth = (lang: string): string => {
  const localDate = new Date().toLocaleDateString()
  let arr = ['']
  if (localDate.match(/\//)) {
    arr = localDate.split('/')
    return `${arr[1]} ${arrMonth[+arr[0] - 1].name[lang as keyof Lang]}`
  } else {
    arr = localDate.split('.')
    return `${arr[0]} ${arrMonth[+arr[1] - 1].name[lang as keyof Lang]}`
  }
}

export const getNameOfDay = (lang: string): string => {
  const numberOfDayInWeek = new Date().getDay()
  const find = arrDay.find(description => description.id === numberOfDayInWeek)

  return find ? find.shortName[lang as keyof Lang] : 'День не найден'
}

export const getShortNameOfDate = (dt: string, lang: string): string => {
  const yearNow = new Date().getFullYear()
  // 0 - число, 1 - месяц (индексы в массивые)
  const [day, month] = dt.split('.')
  const numberDayOfWeek = new Date(yearNow, +month - 1, +day).getDay()

  const find = arrDay.find(day => day.id === numberDayOfWeek)

  return find ? find.shortName[lang as keyof Lang] : 'День не найден'
}

export const getHourAndMin = (): string => {
  const arr = new Date().toLocaleTimeString().split(':')
  arr.pop()

  return arr.join(':')
}

/* export const getSringMonth = (dt: string) => {
  const arr = dt.split('.')
  const found = arrMonth.find(item => item.id === +arr[1])
  return `${arr[0]} ${found?.name}`
} */

export const getHourAndMinute = (dt: number) => {
  const arr = new Date(dt).toLocaleTimeString().split(':')
  arr.pop()

  return arr.join(':')
}
