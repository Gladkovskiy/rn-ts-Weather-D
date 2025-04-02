import {useFocusEffect} from '@react-navigation/native'
import {useCallback, useRef} from 'react'

export const useRefreshOnFocus = <T>(refetch: () => Promise<T>) => {
  const firtTimeRef = useRef(true)

  useFocusEffect(
    useCallback(() => {
      if (firtTimeRef.current) {
        firtTimeRef.current = false
        return
      }
      // console.log('refetch')
      refetch()
    }, [refetch]),
  )
}
