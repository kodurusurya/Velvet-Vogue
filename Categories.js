import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Dresses",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      itemCount: 10,
      description: "Luxury evening gowns and designer dresses"
    },
    {
      id: 2,
      name: "Outerwear",
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
      itemCount: 10,
      description: "Premium coats and jackets"
    },
    {
      id: 3,
      name: "Formals",
      image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=800&q=80",
      itemCount: 10,
      description: "Professional business attire and formal wear"
    },
    {
      id: 4,
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80",
      itemCount: 10,
      description: "Luxury footwear collection"
    },
    {
      id: 5,
      name: "Perfumes",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      itemCount: 10,
      description: "BellaVita exclusive fragrances"
    },
    {
      id: 6,
      name: "New Arrivals",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      itemCount: 10,
      description: "Latest luxury collections"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of luxury categories, each curated to perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link to={`/category/${category.name.toLowerCase()}`} key={category.id}>
              <div className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-80">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                      <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                      <p className="text-sm mb-2 opacity-90">{category.description}</p>
                      <p className="text-sm font-light">{category.itemCount} Items</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;