import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  images: string[];
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    import("../data/categories.json").then((module) =>
      setCategories(module.default.categories)
    );
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🪵 معمل الأفندي — فئات المنتجات
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${encodeURIComponent(cat.id)}`}
            className="block bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1 rounded-xl overflow-hidden"
          >
            <img
              src={cat.images[0]}
              alt={cat.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-gray-700">{cat.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
