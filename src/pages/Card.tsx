import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTag,
  FaCheckCircle,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface ImageItem {
  src: string;
  category: string;
}

interface Offer {
  title: string;
  validUntil: string;
}

interface CardData {
  name: string;
  owner: string;
  job: string;
  phone: string;
  email: string;
  description: string;
  address: string;
  socials: { [key: string]: string };
  images: ImageItem[];
  location?: { mapUrl: string };
  services?: string[];
  offers?: Offer[];
  features?: string[];
}

const Card = () => {
  const { name } = useParams<{ name: string }>();
  const [data, setData] = useState<CardData | null>(null);

  useEffect(() => {
    if (!name) return;
    import(`../data/${name}.json`)
      .then((module) => setData(module.default))
      .catch(() => setData(null));
  }, [name]);

  if (!data)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 animate-pulse">⏳ جارٍ تحميل البطاقة...</p>
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <motion.div
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden w-full text-center p-6 relative"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* الغلاف العلوي */}
        <motion.div
          className="w-full h-44 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.img
            src={data.images?.[1]?.src || "../images/default-cover.jpg"}
            alt="cover"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <h1 className="text-3xl font-extrabold text-white relative z-10 drop-shadow-lg">
            {data.name}
          </h1>
        </motion.div>

        {/* معلومات المالك */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg font-semibold text-gray-800">{data.owner}</p>
          <p className="text-gray-500 mt-1">{data.job}</p>
          <p className="text-gray-500 mt-2">{data.description}</p>
        </motion.div>

        {/* معلومات التواصل */}
        <motion.div
          className="mt-6 space-y-2 text-gray-700 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="flex justify-center items-center gap-2">
            <FaPhoneAlt className="text-green-500" /> {data.phone}
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaEnvelope className="text-red-500" /> {data.email}
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" /> {data.address}
          </p>
        </motion.div>

        {/* روابط التواصل الاجتماعي */}
        <motion.div
          className="flex justify-center space-x-6 mt-6 text-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          {data.socials.facebook && (
            <a
              href={data.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:scale-125 transition-transform"
            >
              <FaFacebook />
            </a>
          )}
          {data.socials.instagram && (
            <a
              href={data.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:scale-125 transition-transform"
            >
              <FaInstagram />
            </a>
          )}
          {data.socials.Twitter && (
            <a
              href={data.socials.Twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:scale-125 transition-transform"
            >
              <FaTwitter />
            </a>
          )}
        </motion.div>

        {/* الفئات / الصور */}
        <motion.div
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {data.images.map((img, index) => (
            <Link key={index} to={`/category/${encodeURIComponent(img.category)}`}>
              <motion.div
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="object-cover w-full h-36 sm:h-40 md:h-44 lg:h-48"
                />
                <div className="p-2 bg-gray-50 text-gray-700 text-sm font-semibold">
                  {img.category}
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* الموقع */}
        {data.location && (
          <motion.div
            className="mt-6 p-5 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-2xl shadow-md flex justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <a
              href={data.location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold text-lg hover:text-blue-900 transition-colors underline decoration-blue-300 decoration-2 hover:decoration-blue-500"
            >
              عرض الموقع على الخريطة
            </a>
          </motion.div>
        )}

        {/* الخدمات */}
        {data.services && (
          <motion.div
            className="mt-6 p-6 bg-gradient-to-r from-purple-50 via-white to-purple-50 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="font-bold mb-4 text-gray-800 text-lg border-b border-gray-300 pb-2">
              خدماتنا المميزة
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
              {data.services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-105"
                >
                  <FaCheckCircle className="text-purple-500" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* المزايا */}
        {data.features && (
          <motion.div
            className="mt-6 p-6 bg-green-50 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <h3 className="font-bold mb-4 text-gray-800 text-lg border-b border-gray-300 pb-2">
              مزايا إضافية
            </h3>
            <ul className="list-disc list-inside semibold text-gray-700">
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* العروض */}
        {data.offers && (
          <motion.div
            className="mt-6 p-6 bg-yellow-50 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            
            <h3 className="font-bold mb-4 text-gray-800 text-lg border-b border-gray-300 pb-2">
            العروض الحالية
            </h3>
            
            <ul className="space-y-1">
              {data.offers.map((offer, index) => (
                <li
                  key={index}
                  className="flex justify-evenly items-center gap-1 p-1 bg-white rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-105"
                >
                  <FaTag className="text-yellow-500" />
                  <span className="font-semibold text-gray-700">{offer.title}</span>
                  <span className="text-gray-500 text-sm"> صالح حتى {offer.validUntil}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* تأثير خفيف أسفل البطاقة */}
        <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-3xl"></div>
      </motion.div>
    </div>
  );
};

export default Card;

