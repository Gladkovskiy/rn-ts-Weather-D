import {PixelRatio} from 'react-native'

export type TGetFontSize = (size: number) => number

export const getFontSize: TGetFontSize = size => {
  const fontScale = PixelRatio.getFontScale()
  return size / fontScale
}
