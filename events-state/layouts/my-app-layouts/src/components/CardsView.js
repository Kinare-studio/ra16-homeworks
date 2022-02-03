import ShopCard from "./ShopCard"

export default function CardsView({ cards }) {


  return (
    <div className="cards">
      {cards.map(card =>
        <ShopCard
          key={card.img + card.price}
          name={card.name}
          color={card.color}
          img={card.img}
          price={card.price}
        />)}
    </div>
  )
}

