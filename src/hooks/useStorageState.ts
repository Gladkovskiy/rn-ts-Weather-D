import {useState, useCallback, useEffect} from 'react'
import {useAsyncStorage} from '@react-native-async-storage/async-storage'

export const useStorageState = (
  key: string,
  defaultValue: any | null = null,
) => {
  const [value, setValue] = useState(defaultValue)
  const {getItem, setItem} = useAsyncStorage(key)

  const getter = useCallback(async () => {
    const data = await getItem()
    let item
    if (data) {
      item = JSON.parse(data)
    } else {
      item = defaultValue
    }
    setValue(item)
  }, [defaultValue, key])

  const setter = useCallback(
    async (setterValue: any) => {
      setValue(setterValue)
      await setItem(JSON.stringify(setterValue))
    },
    [key],
  )

  useEffect(() => {
    getter()
  }, [])

  return [value, setter]
}
