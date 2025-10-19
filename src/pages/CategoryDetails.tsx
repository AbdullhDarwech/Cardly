import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

const CategoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    // البداية من الأعلى
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    import("../data/categories.json")
      .then((module) => {
        const allCategories: { categories: Category[] } = module.default;
        const found = allCategories.categories.find((cat) => cat.id === id);
        setCategory(found || null);
      })
      .catch(() => setCategory(null));
  }, [id]);

  if (!category)
    return (
      <p className="p-10 text-center text-lg text-gray-600 animate-pulse">
        ⏳ جارٍ تحميل التفاصيل...
      </p>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto p-6 sm:p-10"
    >
      {/* عنوان الفئة */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
      >
        {category.name}
      </motion.h1>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.span
                className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-semibold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {product.name}
              </motion.span>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-gray-700 text-sm sm:text-base mb-3">
                {product.description}
              </p>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <span className="text-xl sm:text-2xl font-bold text-orange-500">
                  {product.price} ر.ي
                </span>
                <button className="px-4 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                  شراء الآن
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryDetails;

