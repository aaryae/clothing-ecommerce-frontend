export interface productCardInterface {
  id: string
  image: string
  productHeading: string
  price: number
  discount?: boolean
  originalPrice?: number
  discountPrice?: number
  productState?: boolean
  productValue?: string
  productModal?: () => void
  productDetail?: () => void
}
