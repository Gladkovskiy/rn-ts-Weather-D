export interface IImage {
  name: string
  image: any
}

export const getImage = (icon: string, arrImage: IImage[]) => {
  const found = arrImage.find(item => item.name === icon)

  return found ? found.image : null
}
