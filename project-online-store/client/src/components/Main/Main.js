import React, { Component } from "react";
import "./Main.css";
import honey from "./img1/honey.jpg";
import ramka from "./img1/ramka.jpg";
import bee from "./img1/bee.jpg";
import Item from "./Item";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export class Main extends React.Component {
  render() {
    return (
      <div className="container_2">
        <div className="box-3">
          {this.props.items.map((el) => (
            <Item
              key={el.id}
              item={el}
              addOn={this.props.addOn}
              onShopitem={this.props.onShopitem}
            />
          ))}
        </div>

        <div className="text-2-2">
          <h2>Бджоли раді цвіту, люди раді меду!</h2>
        </div>
        <div>
          <DarkVariantExample />
        </div>
      </div>
    );
  }
}
export default Main;

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={bee} alt="First slide" />
        <Carousel.Caption>
          <h5> next </h5>
          <p>Вулик - житло бджіл й основний інструмент пасічника</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ramka} alt="Second slide" />
        <Carousel.Caption>
          <h5> next</h5>
          <p>
            Рамка - інструмент в бджільництві, одна з головних складових
            рамкового вулика
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={honey} alt="Third slide" />
        <Carousel.Caption>
          <h5> next</h5>
          <p>
            Мед — густа солодка, в'язка речовина, яку бджоли переважно
            виробляють з нектару квітів
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}