import React, {Component} from "react"
import { FaRegTrashCan } from "react-icons/fa6";

export class Order extends React.Component {
    render() {
    return (
<div className="I-te-m">
<img src={this.props.item.img_url}/>
 <h2>{this.props.item.title}</h2>
 <p>{this.props.item.price} UAH</p>
 <FaRegTrashCan  className="deleteimg" onClick={ ()=> this.props.onDelete(this.props.item.id)}/>
</div>
    )
    }
}
export default Order