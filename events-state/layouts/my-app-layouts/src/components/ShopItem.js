import Button from "./Button"

export default function ShopItem({name, color, img, price}) {
    
  return (
      <div className = "item">
      <div><img src = {img} alt = {name} className ="imgItem"/></div>
      <h3>{name}</h3>
      <div>{color}</div>
      <div className = "price">${price}</div>
      <Button/>
    </div>
  )
}