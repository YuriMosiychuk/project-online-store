import "./Category.css";
import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Каталог товарів",
        },
        {
          key: "Beehive",
          name: "Вулик",
        },
        {
          key: "Beeswax",
          name: "Вoщина",
        },
        {
          key: "Beekeeper's clothes",
          name: "Одяг пасічника",
        },
        {
          key: "Beekeeper's inventory",
          name: "Інвентар бджоляра",
        },
        {
          key: "Container for honey storage",
          name: "Тара для зберігання меду",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.openCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}
export default Categories;
