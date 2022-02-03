import ShopItem from "./ShopItem";


export default function ListView({ items }) {
  return (
    <div className="items">
      {items.map(item =>
        <ShopItem
          key={item.img + item.price}
          name={item.name}
          color={item.color}
          img={item.img}
          price={item.price}
        />)}
    </div>
  )
}