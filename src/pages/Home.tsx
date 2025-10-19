import CardList from "../components/CardList";

const Home = () => {
  const cards = [
    { id: "afandi", name: "نجارة الأفندي", job: "نجار أثاث" },
    { id: "sara-bakery", name: "مخبز سارة", job: "مخبز وحلويات" },
    { id: "furniture-plus", name: "أثاث بلس", job: "تصميم داخلي وديكور" },
    { id: "modern-doors", name: "أبواب مودرن", job: "تصميم وتركيب الأبواب" },
    { id: "smart-kitchens", name: "مطابخ ذكية", job: "تصميم مطابخ عصرية" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="text-center py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
          💳 بطاقات الأعمال الذكية
        </h1>
        <p className="text-gray-500 text-base sm:text-lg">
          اكتشف مجموعة من البطاقات التفاعلية لأصحاب المشاريع والورش والمتاجر
        </p>
      </header>

      <main className="px-4 sm:px-8 md:px-12 lg:px-20 pb-16">
        <CardList cards={cards} />
      </main>
    </div>
  );
};

export default Home;
