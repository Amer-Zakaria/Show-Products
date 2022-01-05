import React, { useState } from "react";
import sprite from "../Icons/sprite.svg";

const Product = ({
  product: {
    id,
    number,
    category: productName,
    price: productPrice,
    quantitySold,
    rating: { count: productQuantity },
    soldStrength,
    description: productDescription,
    image: productImage,
    cutProductDescription,
    expand,
  },
  onIncrease,
  onDecrease,
  onNumberChange,
  onNumberFocusout,
  onExpand,
}) => {
  return (
    <div className="product grid grid--col-2">
      <div className="product__left">
        <img
          className="product__image media__image"
          src={productImage}
          alt="Product Image"
        />
        <div>
          <div className="product__sold-bar-container">
            <span
              className="product__sold-bar"
              style={{ width: soldStrength + "%" }}
            ></span>
          </div>
          <p className="product__sold-text">{`sold ${quantitySold} from ${productQuantity}`}</p>
        </div>
      </div>
      <div className="product__body">
        <div>
          <h3 className="product__title media__title">{productName}</h3>
          {expand ? (
            <p className="product__content media__content">
              {productDescription}{" "}
              <span
                className="product__content-more"
                onClick={() => onExpand(id)}
              >
                show less
              </span>
            </p>
          ) : (
            <p className="product__content media__content">
              {cutProductDescription
                ? cutProductDescription
                : productDescription}
              {cutProductDescription ? (
                <span
                  className="product__content-more"
                  onClick={() => onExpand(id)}
                >
                  ...more
                </span>
              ) : (
                ""
              )}
            </p>
          )}
        </div>
        <div className="product__pricing">
          <div className="product__price">{`${productPrice} USD`}</div>
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
    </div>
  );
};

export default Product;
