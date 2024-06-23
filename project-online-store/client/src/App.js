import React from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Category/Category";
import Shopitem from "./components/Shopitem/Shopitem";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      opItems: [],
      items: [], 
      Shopitem: false,
      fullShop: {},
    };

    this.state.opItems = this.state.items;
    this.addOrder = this.addOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.openCategory = this.openCategory.bind(this);
    this.onShopitem = this.onShopitem.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:3001/");
      this.setState({ items: response.data, opItems: response.data });
    } catch (error) {
      console.error("Error fetching items", error);
    }
  }

  render() {
    return (
      <div className="App">
        <Header order={this.state.order} onDelete={this.deleteOrder} />
        <Categories openCategory={this.openCategory} />
        {this.state.Shopitem && (
          <Shopitem
            item={this.state.fullShop}
            addOn={this.addOrder}
            onShopitem={this.onShopitem}
          />
        )}
        <Main
          items={this.state.opItems}
          addOn={this.addOrder}
          onShopitem={this.onShopitem}
        />
        <Footer />
      </div>
    );
  }

  onShopitem(item) {
    this.setState({ fullShop: item });
    this.setState({ Shopitem: !this.state.Shopitem });
  }

  openCategory(category) {
    if (category === `all`) {
      this.setState({ opItems: this.state.items });
      return;
    }

    this.setState({
      opItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ order: this.state.order.filter((el) => el.id !== id) });
  }

  addOrder(item) {
    let OnArray = false;
    this.state.order.forEach((el) => {
      if (el.id === item.id) OnArray = true;
    });
    if (!OnArray) this.setState({ order: [...this.state.order, item] });
  }
}

export default App;