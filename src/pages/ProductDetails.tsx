// src/pages/ProductDetails.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  woodType?: string;
  dimensions?: string;
  color?: string;
  weight?: string;
  country?: string;
  rating?: number;
  inStock?: boolean;
  images: string[];
  video?: string; // إضافة الفيديو
}

const ProductDetails = () => {
  const { cardName, categoryId, productId } = useParams<{
    cardName: string;
    categoryId: string;
    productId: string;
  }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!cardName || !categoryId || !productId) return;

    import(`../data/categories/${cardName}-categories.json`)
      .then((module) => {
        const category = module.default.categories.find(
          (c: any) => c.id === categoryId
        );
        if (category) {
          const found = category.products.find(
            (p: Product) => p.id === Number(productId)
          );
          setProduct(found || null);
          setCurrentImage(0);
        }
      })
      .catch(() => setProduct(null));
  }, [cardName, categoryId, productId]);

  // Auto-slide الصور مع fade و slight scale
  useEffect(() => {
    if (!product || product.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [product]);

  if (!product)
    return (
      <p className="p-10 text-center text-lg text-gray-600 animate-pulse">
        ⏳ جاري تحميل تفاصيل المنتج...
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Video or Carousel */}
      <div className="relative w-full  h-80 rounded-3xl overflow-hidden shadow-2xl perspective">
        {product.video ? (
          <video
            src={product.video}
            controls
            autoPlay

         
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        ) : (
          product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} - ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-80 object-cover transition-transform transition-opacity duration-1000 ease-in-out rounded-3xl shadow-lg
                ${
                  index === currentImage
                    ? "opacity-100 scale-105 z-10"
                    : "opacity-0 scale-95 z-0"
                }`}
            />
          ))
        )}

        {/* Indicators */}
        {!product.video && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {product.images.map((_, index) => (
              <span
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentImage ? "bg-orange-500 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <h1 className="text-5xl font-extrabold text-orange-600 tracking-wide">
          {product.name}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-orange-400 pl-4">
          {product.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {product.woodType && (
            <div className="bg-orange-50 p-4 rounded-xl shadow-sm font-medium text-orange-700">
              نوع الخشب: {product.woodType}
            </div>
          )}
          {product.dimensions && (
            <div className="bg-orange-50 p-4 rounded-xl shadow-sm font-medium text-orange-700">
              الأبعاد: {product.dimensions}
            </div>
          )}
          {product.color && (
            <div className="bg-orange-50 p-4 rounded-xl shadow-sm font-medium text-orange-700">
              اللون: {product.color}
            </div>
          )}
          {product.weight && (
            <div className="bg-orange-50 p-4 rounded-xl shadow-sm font-medium text-orange-700">
              الوزن: {product.weight}
            </div>
          )}
          {product.country && (
            <div className="bg-orange-50 p-4 rounded-xl shadow-sm font-medium text-orange-700">
              البلد: {product.country}
            </div>
          )}
          {product.rating !== undefined && (
            <div className="bg-orange-50 p-4 rounded-xl shadow-sm font-medium flex justify-between items-center text-orange-700">
              التقييم:
              <span className="bg-orange-200 px-3 py-1 rounded-lg font-bold">
                {product.rating} ⭐
              </span>
            </div>
          )}
          {product.inStock !== undefined && (
            <div
              className={`p-4 rounded-xl shadow-sm font-semibold text-white text-center ${
                product.inStock ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {product.inStock ? "متوفر ✅" : "غير متوفر ❌"}
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-3xl md:text-4xl font-bold text-red-500">
            السعر: <span className="text-red-600">{product.price} دولار</span>
          </p>

          <button className="px-10 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            سراء
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

