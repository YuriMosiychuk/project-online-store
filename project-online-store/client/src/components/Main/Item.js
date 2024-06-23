import React, { Component } from "react";

export class Item extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.item.img_url}
          onClick={() => this.props.onShopitem(this.props.item)}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <b>{this.props.item.price} UAH</b>
        <div className="ddd" onClick={() => this.props.addOn(this.props.item)}>
          {" "}
          +{" "}
        </div>
      </div>
    );
  }
}
export default Item;