import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const { cardName, categoryId } = useParams<{ cardName: string; categoryId: string }>();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (!cardName || !categoryId) return;

    import(`../data/categories/${cardName}-categories.json`)
      .then((module) => {
        const found = module.default.categories.find((c: Category) => c.id === categoryId);
        setCategory(found);
      })
      .catch(() => setCategory(null));
  }, [cardName, categoryId]);

  if (!category) return <p className="text-center p-8 text-gray-500">جاري تحميل الفئة...</p>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{category.name}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {category.products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md hover:shadow-xl transition rounded-xl overflow-hidden"
          >
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-xl text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-blue-600 font-semibold mt-3">{product.price} ل.س</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;

