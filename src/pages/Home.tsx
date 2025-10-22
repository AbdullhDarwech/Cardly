import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import CardList from "../components/CardList";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const cards = [
    { id: "afandi", name: "نجارة الأفندي", job: "نجار أثاث" },
    { id: "sara-bakery", name: "مخبز سارة", job: "مخبز وحلويات" },
    { id: "raqqa-njara", name: "نجارة الرقة", job: "نجار أثاث" },
    { id: "furniture-plus", name: "أثاث بلس", job: "تصميم داخلي وديكور" },
    { id: "modern-doors", name: "أبواب مودرن", job: "تصميم وتركيب الأبواب" },
    { id: "smart-kitchens", name: "مطابخ ذكية", job: "تصميم مطابخ عصرية" },
  ];

  const whatsappNumber = "963930904315"; // ← غيّر هذا إلى رقمك بدون "+" (مثلاً: 967 بدل +967)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      {/* فيديو تمهيدي */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/video/intro.mov"
        ></video>
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
            💳 بطاقات الأعمال الذكية
          </h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            منصة تجمع بطاقات المشاريع والمتاجر بطريقة احترافية وجذابة
          </motion.p>
        </motion.div>
      </div>

      {/* قسم عرض البطاقات */}
      <motion.main
        className="px-4 sm:px-8 md:px-12 lg:px-20 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          استعرض البطاقات المميزة ✨
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.7 },
            },
          }}
        >
          <CardList cards={cards} />
        </motion.div>
      </motion.main>

      {/* قسم إنشاء بطاقة */}
      <section className="mt-16 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 py-12 px-8 rounded-3xl mx-6 sm:mx-12 md:mx-16 text-center text-white shadow-lg">
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          هل تريد إنشاء بطاقة أعمالك الخاصة؟
        </motion.h3>
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          انضم الآن وابدأ بتصميم بطاقة احترافية لمشروعك أو متجرك بسهولة تامة.
        </motion.p>
        <motion.button
          onClick={() => setShowModal(true)}
          className="px-8 py-3 bg-white text-red-500 font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          إنشاء بطاقتي الآن
        </motion.button>
      </section>

      {/* نافذة التواصل */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-3">تواصل معنا</h2>
              <p className="text-gray-600 mb-6">يسعدنا مساعدتك في إنشاء بطاقتك الخاصة</p>

              <div className="flex justify-center gap-6 text-3xl mb-6">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:scale-110 transition-transform"
                  title="تواصل واتساب"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/cardly2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:scale-110 transition-transform"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/abdullah.darwech.7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:scale-110 transition-transform"
                  title="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="mailto:darwechabdullh@gmail.com"
                  className="text-gray-700 hover:scale-110 transition-transform"
                  title="Email"
                >
                  <FaEnvelope />
                </a>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
              >
                إغلاق
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

