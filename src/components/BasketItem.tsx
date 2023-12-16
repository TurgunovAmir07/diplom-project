import React from "react";

interface BasketItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  setOrder: (id: string) => void;
}

const BasketItem: React.FC<BasketItemProps> = (props) => {
  return (
    <li className="list-group-item">
      {props.name} {props.price}руб x{props.quantity}
      <button
        className="btn btn-primary"
        onClick={() => props.setOrder(props.id)}
      >
        Удалить из корзины
      </button>
    </li>
  );
};

export default BasketItem;
