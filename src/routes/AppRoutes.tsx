import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import Card from "../pages/Card";
import Categories from "../pages/Categories";
import CategoryDetails from "../pages/CategoryDetails";
import ProductDetails from "../pages/ProductDetails"; // ✅ أضفنا صفحة التفاصيل

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 🏠 الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />

        {/* 📇 صفحة البطاقات */}
        <Route
          path="/card/:name"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Card />
            </motion.div>
          }
        />

        {/* 🗂️ صفحة الفئات */}
        <Route
          path="/categories"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Categories />
            </motion.div>
          }
        />

        {/* 📦 تفاصيل الفئة */}
        <Route
          path="/category/:cardName/:categoryId"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <CategoryDetails />
            </motion.div>
          }
        />

        {/* 🛍️ تفاصيل المنتج */}
        <Route
          path="/category/:cardName/:categoryId/product/:productId"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ProductDetails />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;