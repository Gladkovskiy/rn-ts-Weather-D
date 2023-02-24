const arrMonth: {id: number; name: string}[] = [
  {id: 1, name: 'января'},
  {id: 2, name: 'февраля'},
  {id: 3, name: 'марта'},
  {id: 4, name: 'апреля'},
  {id: 5, name: 'мая'},
  {id: 6, name: 'июня'},
  {id: 7, name: 'июля'},
  {id: 8, name: 'августа'},
  {id: 9, name: 'сентября'},
  {id: 10, name: 'октября'},
  {id: 11, name: 'ноября'},
  {id: 12, name: 'декабря'},
]

const arrDay: {id: number; name: string; shortName: string}[] = [
  {id: 1, name: 'понедельник', shortName: 'Пн'},
  {id: 2, name: 'вторник', shortName: 'Вт'},
  {id: 3, name: 'среда', shortName: 'Ср'},
  {id: 4, name: 'четверг', shortName: 'Чт'},
  {id: 5, name: 'пятница', shortName: 'Пт'},
  {id: 6, name: 'суббота', shortName: 'Сб'},
  {id: 0, name: 'воскресенье', shortName: 'Вс'},
]

export const dateToMonth = (): string => {
  const localDate = new Date().toLocaleDateString()
  let arr = ['']
  if (localDate.match(/\//)) {
    arr = localDate.split('/')
    return `${arr[1]} ${arrMonth[+arr[0] - 1].name}`
  } else {
    arr = localDate.split('.')
    return `${arr[0]} ${arrMonth[+arr[1] - 1].name}`
  }
}

export const getNameOfDay = (): string => {
  const numberOfDayInWeek = new Date().getDay()
  const find = arrDay.find(description => description.id === numberOfDayInWeek)

  return find ? find.shortName : 'День не найден'
}

export const getShortNameOfDate = (dt: string): string => {
  const yearNow = new Date().getFullYear()
  // 0 - число, 1 - месяц (индексы в массивые)
  const [day, month] = dt.split('.')
  const numberDayOfWeek = new Date(yearNow, +month - 1, +day).getDay()

  const find = arrDay.find(day => day.id === numberDayOfWeek)

  return find ? find.shortName : 'День не найден'
}

export const getHourAndMin = (): string => {
  const arr = new Date().toLocaleTimeString().split(':')
  arr.pop()

  return arr.join(':')
}

export const getSringMonth = (dt: string) => {
  const arr = dt.split('.')
  const found = arrMonth.find(item => item.id === +arr[1])
  return `${arr[0]} ${found?.name}`
}

export const getHourAndMinute = (dt: number) => {
  const arr = new Date(dt).toLocaleTimeString().split(':')
  arr.pop()

  return arr.join(':')
}
