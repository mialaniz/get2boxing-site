import ProductCard from './ProductCard'
import Image from 'next/image'

const products = [
  { id: 1, name: 'Shirt', price: 29.99 },
  { id: 2, name: 'Hand Wraps', price: 9.99 },
  { id: 3, name: 'Boxing Gloves', price: 79.99 },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}