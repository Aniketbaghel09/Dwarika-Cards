import React from 'react'
import Hero from '../components/Hero'
import image1 from '../images/sofa.png'
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a brief description of Product 1.',
    price: '$99.99',
    imageUrl: image1,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a brief description of Product 2.',
    price: '$89.99',
    imageUrl: 'path/to/image2.jpg',
  },
  // Add more products as needed
];


const HomePage = () => {
  return (
   <>
     <Hero/>
     <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{product.price}</span>
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </> 
  )
}

export default HomePage