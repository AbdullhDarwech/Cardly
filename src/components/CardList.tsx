import CardItem from "./CardItem";
interface Card {
  id: string;
  name: string;
  job: string;
}


interface CardListProps {
  cards: Card[];
}
const  CardList = ({ cards }: CardListProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {cards.map((card) => (
      <CardItem
        key={card.id}
        id={card.id}         // ← هذا السطر تم إضافته
        name={card.name}
        job={card.job}
        className="hover:shadow-lg transition transform hover:-translate-y-1"
      />
    ))}
  </div>
);


export default CardList;
