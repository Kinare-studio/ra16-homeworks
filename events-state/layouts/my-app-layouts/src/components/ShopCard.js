import Button from "./Button";

export default function ShopCard({ name, color, img, price }) {

    return (
        <div style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '250px 250px',
            backgroundPosition: "center"
            
        }} className="card">
        <div className ="name">
            <h3>{name}</h3>
            <div>{color}</div>
            </div>
            <div className = "footer">
            <div>${price}</div>
            <Button/>
            </div>
        </div>
    )
}