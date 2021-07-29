import React, { useState } from "react";
import sprite from "../Icons/sprite.svg";

const Product = ({
  product: {
    id,
    number,
    product_price,
    quantity_sold,
    product_quantity,
    soldStrength,
    product_id: { name: productName, description: productDescription },
    prize_id: { name: prizeName, description: prizeDescription },
  },
  onIncrease,
  onDecrease,
  onNumberChange,
  onNumberFocusout,
}) => {
  const [collapse, setcollapse] = useState(false);
  let productClasses = collapse
    ? "product grid grid--col-2 collapsible"
    : "product grid grid--col-2 ";

  const handleCollapse = () => {
    setcollapse(!collapse);
  };

  return (
    <div className={productClasses}>
      <div className="product__left">
        <img
          className="product__image media__image"
          src={`https://picsum.photos/700/400.webp?random=${id}`}
          alt="Product Image"
        />
        <div>
          <div className="product__sold-bar-container">
            <span
              className="product__sold-bar"
              style={{ width: soldStrength + "%" }}
            ></span>
          </div>
          <p className="product__sold-text">{`sold ${quantity_sold} from ${product_quantity}`}</p>
        </div>
      </div>
      <div className="product__body">
        <div>
          <h3 className="product__title media__title">{productName}</h3>
          <p className="product__content media__content">
            {productDescription}
          </p>
        </div>
        <div className="product__pricing">
          <div className="product__price">{`${product_price} AED`}</div>
          <div className="product__count">
            <svg
              className="product__decrease icon"
              onClick={() => onDecrease(id)}
            >
              <use href={sprite + "#arrow"}></use>
            </svg>
            <input
              type="number"
              value={number}
              id="rewriting-library"
              className="product__number"
              onChange={(e) => onNumberChange(id, e.target.value)}
              onBlur={(e) => onNumberFocusout(id)}
            />
            <svg
              className="product__increase icon"
              onClick={() => onIncrease(id)}
            >
              <use href={sprite + "#arrow"}></use>
            </svg>
          </div>

          <button className="product__add">add to card</button>
        </div>
      </div>
      {/* prize */}
      <div className="prize">
        <header className="prize__header" onClick={handleCollapse}>
          <p>get a chance to win</p>
          <svg className="prize__chevron icon">
            <use href={sprite + "#chevron"}></use>
          </svg>
        </header>
        <footer className="prize__footer grid grid--col-2">
          <img
            className="prize__image media__image"
            src={`https://picsum.photos/700/400.webp?random=${id + 10}`}
            alt="Prize Image"
          />
          <div>
            <h3 className="prize__title media__title">{prizeName}</h3>
            <div className="prize__content media__content">
              {prizeDescription}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Product;
