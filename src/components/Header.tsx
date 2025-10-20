import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* شعار المشروع */}
        <Link to="/" className="flex items-center">
  <img 
    src="../images/c.png" 
    alt="Logo" 
    className="h-16 w-auto object-contain" 
  />
</Link>


        {/* شريط التنقل */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500 transition">الرئيسية</Link>
          <Link to="/cards" className="hover:text-blue-500 transition">البطاقات</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">تواصل معنا</Link>
        </nav>

        {/* أيقونات شبكات اجتماعية */}
        <div className="flex space-x-3">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition"><FaFacebook /></a>
          <a href="https://www.instagram.com/cardly2026?igsh=MTNseXZ5N293OG5rMw==" className="text-gray-600 hover:text-blue-400 transition"><FaInstagram /></a>
          <a href="#" className="text-gray-600 hover:text-blue-700 transition"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
;
