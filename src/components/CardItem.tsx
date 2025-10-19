import { Link } from "react-router-dom";

interface CardItemProps {
  id: string;
  name: string;
  job: string;
  className?: string;
}

const CardItem = ({ id, name, job, className }: CardItemProps) => (
  <Link
    to={`/card/${id}`}  // ← يستخدم id هنا
    className={`block bg-white p-5 rounded-lg shadow ${className}`}
  >
    <h2 className="text-lg font-bold">{name}</h2>
    <p className="text-sm text-gray-500">{job}</p>
  </Link>
);

export default CardItem;
