import { motion } from "framer-motion";
import CardList from "../components/CardList";

const Home = () => {
  const cards = [
    { id: "afandi", name: "نجارة الأفندي", job: "نجار أثاث" },
    { id: "sara-bakery", name: "مخبز سارة", job: "مخبز وحلويات" },
    { id: "raqqa-njara", name: "نجارة الرقة", job: "نجار أثاث" },
    { id: "furniture-plus", name: "أثاث بلس", job: "تصميم داخلي وديكور" },
    { id: "modern-doors", name: "أبواب مودرن", job: "تصميم وتركيب الأبواب" },
    { id: "smart-kitchens", name: "مطابخ ذكية", job: "تصميم مطابخ عصرية" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      {/* فيديو تمهيدي بخلفية ناعمة */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          // playsInline
preload="auto"

          src="/video/intro.mov" // ضع الفيديو هنا داخل مجلد public/videos
        ></video>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* عنوان الصفحة فوق الفيديو */}
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

      {/* قسم عرض الكروت */}
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
          className="px-8 py-3 bg-white text-red-500 font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          إنشاء بطاقتي الآن
        </motion.button>
      </section>
    </div>
  );
};

export default Home;
