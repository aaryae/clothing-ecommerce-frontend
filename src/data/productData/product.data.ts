import { image } from '@config/constant/image'

export const MenProductData = [
  {
    id: '1',
    productHeading: 'Relaxed Boyfriend Tee',
    price: 20,
    image: image.menproduct1 ?? image.fallback,
  },
  {
    id: '2',
    productHeading: 'Tusar Silk Kami',
    price: 20,
    image: image.menproduct2 ?? image.fallback,
  },
  {
    id: '3',
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
    id: '4',
    productHeading: 'Organic Linen Maxi Dress',
    price: 20,
    image: image.menproduct6 ?? image.fallback,
  },
  {
    id: '5',
    productHeading: 'Organic Cotton Belted Jacket',
    price: 20,
    image: image.menproduct5 ?? image.fallback,
  },
  {
    id: '6',
    productHeading: 'Linen A-Line Skirt',
    price: 20,
    image: image.menproduct4 ?? image.fallback,
    productState: true,
    productValue: 'best seller',
  },
]

export const womenProductData = [
  {
    id: '7',
    productHeading: 'Relaxed Boyfriend Tee',
    price: 220,
    image: image.womenproduct3 ?? image.fallback,
  },
  {
    id: ' 8',
    productHeading: 'Rusar Silk Kami',
    price: 220,
    image: image.womenproduct2 ?? image.fallback,
  },
  {
    id: '9',
    productHeading: 'Classic Cotton Tee',
    price: 230,
    image: image.womenproduct1 ?? image.fallback,
    discount: true,
    originalPrice: 120,
    discountPrice: 100,
    productState: true,
    productValue: 'Sale',
  },
  {
    id: '10',
    productHeading: 'Linen A-Line Skirt',
    price: 240,
    image: image.womenproduct4 ?? image.fallback,
    productState: true,
    productValue: 'Best Seller',
  },
  {
    id: '11',
    productHeading: 'Organic Cotton Belted Jacket',
    price: 260,
    image: image.womenproduct5 ?? image.fallback,
  },
  {
    id: '12',
    productHeading: 'Organic Linen Maxi Dress',
    price: 260,
    image: image.womenproduct6 ?? image.fallback,
  },
]
