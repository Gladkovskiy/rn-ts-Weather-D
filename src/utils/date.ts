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

export const dateToMonth = (dt: number): string => {
  const localDate = new Date(dt).toLocaleDateString()
  const arr = localDate.split('.')

  return `${arr[0]} ${arrMonth[+arr[1] - 1].name}`
}

export const getHourAndMin = (dt: number): string => {
  const arr = new Date(dt).toLocaleTimeString().split(':')
  arr.pop()

  return arr.join(':')
}

export const getSringMonth = (dt: string) => {
  const arr = dt.split('.')
  const found = arrMonth.find(item => item.id === +arr[1])
  return `${arr[0]} ${found?.name}`
}
