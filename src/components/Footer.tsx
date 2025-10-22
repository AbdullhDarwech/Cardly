import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* نبذة عن المشروع */}
        <div>
          <h2 className="text-lg font-bold mb-4" >Cardly عن  </h2>
          <p className="text-sm">
            منصة لإنشاء ومشاركة بطاقات الأعمال الذكية بطريقة سهلة وسريعة.  
            احصل على بطاقتك الآن وشاركها مع عملائك وزملائك.
          </p>
        </div>

        {/* روابط سريعة */}
        <div>
          <h2 className="text-lg font-bold mb-4">روابط سريعة</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600 transition">الرئيسية</a></li>
            <li><a href="/cards" className="hover:text-blue-600 transition">البطاقات</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">تواصل معنا</a></li>
          </ul>
        </div>

        {/* شبكات اجتماعية */}
        <div>
          <h2 className="text-lg font-bold mb-4">تابعنا</h2>
          <div className="flex space-x-4 text-xl">
          <div className="flex items-center gap-4 text-2xl">
  <a
    href="https://www.facebook.com/share/17HzatYYby/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 transition"
  >
    <FaFacebook />
  </a>

  <a
    href="mailto:darwechabdullh@gmail.com"
    className="hover:text-blue-400 transition"
  >
    <FaEnvelope />
  </a>

  <a
    href="https://www.linkedin.com/in/abdullh-darwech-855bab267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-700 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/cardly2026?igsh=MTNseXZ5N293OG5rMw=="
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 transition"
  >
    <FaInstagram />
  </a>
</div>

          </div>
        </div>

      </div>

      <div className="bg-gray-200 text-center text-sm py-4 mt-6">
        &copy; 2025 Cardly. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
