import { image } from '@config/constant/image'

export const MenProductData = [
  {
    productHeading: 'Relaxed Boyfriend Tee',
    price: 20,
    image: image.menproduct1 ?? image.fallback,
  },
  {
    productHeading: 'Tusar Silk Kami',
    price: 20,
    image: image.menproduct2 ?? image.fallback,
  },
  {
    productHeading: 'Classic Cotton Tee',
    price: 20,
    image: image.menproduct3 ?? image.fallback,
    discount: true,
    originalPrice: 120,
    discountPrice: 100,
    productState: true,
    productValue: 'Sale',
  },
  {
    productHeading: 'Organic Linen Maxi Dress',
    price: 20,
    image: image.menproduct6 ?? image.fallback,
  },
  {
    productHeading: 'Organic Cotton Belted Jacket',
    price: 20,
    image: image.menproduct5 ?? image.fallback,
  },
  {
    productHeading: 'Linen A-Line Skirt',
    price: 20,
    image: image.menproduct4 ?? image.fallback,
    productState: true,
    productValue: 'best seller',
  },
]

export const womenProductData = [
  {
    productHeading: 'Relaxed Boyfriend Tee',
    price: 20,
    image: image.womenproduct3 ?? image.fallback,
  },
  {
    productHeading: 'Rusar Silk Kami',
    price: 20,
    image: image.womenproduct2 ?? image.fallback,
  },
  {
    productHeading: 'Classic Cotton Tee',
    price: 20,
    image: image.womenproduct1 ?? image.fallback,
    discount: true,
    originalPrice: 120,
    discountPrice: 100,
    productState: true,
    productValue: 'Sale',
  },
  {
    productHeading: 'Linen A-Line Skirt',
    price: 20,
    image: image.womenproduct4 ?? image.fallback,
    productState: true,
    productValue: 'Best Seller',
  },
  {
    productHeading: 'Organic Cotton Belted Jacket',
    price: 20,
    image: image.womenproduct5 ?? image.fallback,
  },
  {
    productHeading: 'Organic Linen Maxi Dress',
    price: 20,
    image: image.womenproduct6 ?? image.fallback,
  },
]

