import { useState } from "react";
import "./Header.css";
import logo from "./img/logo.jpg";
import { FaCartArrowDown } from "react-icons/fa";
import Order from "./Order";

function Header(props) {
  let [OpenCart, letCartOpen] = useState(false);
  let summa = 0;
  props.order.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div className="container_1">
      <li>
        <p className="logo-block">
          <img className="src" src={logo} alt="null0" />
        </p>
      </li>
      <li>
        <p className="nav-list-link">Головна</p>
      </li>
      <li>
        <p className="nav-list-link">Про магазин</p>
      </li>
      <li>
        <p className="nav-list-link">Блог</p>
      </li>
      <li>
        <p className="nav-list-link">Новини</p>
      </li>
      <li>
        <p className="nav-list-link" href="#">
          Статті
        </p>
      </li>
      <li>
        <p className="nav-list-link">Про нас</p>
      </li>
      <li>
        <p className="nav-list-link">Контакти</p>
      </li>
      <li>
      <FaCartArrowDown
        onClick={() => letCartOpen((OpenCart = !OpenCart))}
        className={"FaCart $ {OpenCart && 'active'} "}
      />
      {OpenCart && (
        <div className="cart-shop">
          {props.order.map((el) => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
          ))}
          <p className="Sum">
            Загальна сума:{new Intl.NumberFormat().format(summa)} UAH
          </p>
        </div>
      )}
      </li>
    </div>
  );
}
export default Header;
