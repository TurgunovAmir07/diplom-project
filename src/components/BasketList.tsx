import React from "react";
import BasketItem from "./BasketItem";

interface BasketListProps {
  order: { id: string; name: string; price: number; quantity: number }[];
  setOrder: (id: string) => void;
}

const BasketList: React.FC<BasketListProps> = (props) => {
  const { order, setOrder } = props;

  if (!order.length) {
    return (
      <ul className="basket list-group col-md-4">
        <li className="list-group-item active">Корзина</li>
        <li className="list-group-item">Товаров нет</li>
      </ul>
    );
  }

  return (
    <ul className="basket list-group col-md-4">
      <li className="list-group-item active">Корзина</li>
      {order.map((item, index) => (
        <BasketItem key={index} setOrder={setOrder} {...item} />
      ))}
      <li className="list-group-item active">
        Общая стоимость:{" "}
        {order.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)}{" "}
        рублей.
      </li>
    </ul>
  );
};

export default BasketList;
