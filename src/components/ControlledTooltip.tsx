import React, {FC, useState, PropsWithChildren} from 'react'
import {TooltipProps} from '@rneui/base'
import {Tooltip, useTheme} from '@rneui/themed'

const ControlledTooltip: FC<PropsWithChildren<TooltipProps>> = props => {
  const [open, setOpen] = useState(false)
  const {theme} = useTheme()

  return (
    <Tooltip
      visible={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      skipAndroidStatusBar
      backgroundColor={`${theme.colors.secondary}98`}
      {...props}
    />
  )
}

export default ControlledTooltip
