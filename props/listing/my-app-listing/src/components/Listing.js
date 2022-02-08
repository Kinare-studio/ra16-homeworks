import propTypes from 'prop-types'
export default function Listing({ items }) {

    return (
        items.map(function (item) {
            console.log(item);
            const arr = item.quantity ? [item.quantity <= 10 ? "level-low" : item.quantity <= 20 ? "level-medium" : "level-high", "item-quantity"] : null;
            return (
                <div className={item.error_messages || item.state === "removed" ? "item.hidden" : "item"} key={item.listing_id ? item.listing_id : null}>
                    <div className="item-image">
                        <a href={item.url ? item.url : null}>
                            <img src={item?.MainImage?.url_570xN ? item.MainImage.url_570xN : null} alt={item.title ? item.title : null} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title ? item.title.length > 50 ? item.title.slice(0, 49) + '...' : item.title : null}</p>
                        <p className="item-price">{item.currency_code === "USD" ? '$' + item.price : item.currency_code === "EUR" ? '€' + item.price : item.price + item.currency_code ? item.price + item.currency_code : null}</p>
                        <p className={arr ? arr.join(" ") : null}>{item.quantity ? item.quantity : null}</p>
                    </div>
                </div>
            )
        })
    )
}

Listing.defaultProps = {
    items: []
};

Listing.propTypes = {
    items: propTypes.array
};
