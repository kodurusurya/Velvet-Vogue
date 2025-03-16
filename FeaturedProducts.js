import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  
  const products = [
    {
      id: 1,
      name: "Italian Silk Evening Gown",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
      category: "Dresses"
    },
    {
      id: 2,
      name: "Cashmere Wool Coat",
      price: 3999.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
      category: "Outerwear"
    },
    {
      id: 3,
      name: "Designer Leather Handbag",
      price: 1899.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Crystal Embellished Heels",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      category: "Shoes"
    },
    {
      id: 5,
      name: "Midnight Rose Perfume",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      category: "Perfumes"
    },
    {
      id: 6,
      name: "Business Suit Set",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=800&q=80",
      category: "Formals"
    },
    {
      id: 7,
      name: "Limited Edition Watch",
      price: 3499.99,
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
      category: "New Arrivals"
    },
    {
      id: 8,
      name: "Seasonal Silk Scarf",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1584285405429-136bf988919c?w=800&q=80",
      category: "Accessories"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of luxury pieces, each one chosen 
            for its exceptional quality and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex justify-between items-center">
                    <button className="text-white hover:text-gray-200 flex items-center gap-2">
                      <Heart size={20} />
                      Wishlist
                    </button>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="text-white hover:text-gray-200 flex items-center gap-2"
                    >
                      <ShoppingBag size={20} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-500 text-sm mb-1">{product.category}</p>
                <h3 className="font-serif text-lg mb-2">{product.name}</h3>
                <p className="text-lg">${product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;