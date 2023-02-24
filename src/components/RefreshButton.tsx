import {Button, Icon, makeStyles} from '@rneui/themed'
import {useQueryClient} from '@tanstack/react-query'
import React, {FC, useContext, useState} from 'react'
import {GlobalContext} from './GlobalContextProvider'

interface IRefreshButton {
  isLoading: boolean
  timeoutRefresh?: number
}

const RefreshButton: FC<IRefreshButton> = ({isLoading, timeoutRefresh = 0}) => {
  const styles = useStyle()
  const [refreshActive, setRefreshActive] = useState(false)
  const {coordinates} = useContext(GlobalContext)
  const queryClient = useQueryClient()

  const update = () => {
    queryClient.invalidateQueries(['currentWeather', coordinates])
    setRefreshActive(true)
    setTimeout(() => {
      setRefreshActive(false)
    }, timeoutRefresh)
  }

  return (
    <Button
      buttonStyle={styles.refreshButton}
      color="primary"
      onPress={update}
      loading={isLoading}
      disabled={refreshActive}>
      <Icon type="font-awesome" name="refresh" color="white" size={20} />
    </Button>
  )
}

export default RefreshButton

const useStyle = makeStyles(() => ({
  refreshButton: {
    borderRadius: 20,
  },
}))
