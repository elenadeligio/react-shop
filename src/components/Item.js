import React, { Component } from "react";
import { FaCartPlus } from "react-icons/fa";

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.props.item.img} alt="Item" />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}€</b>
                <FaCartPlus className="add-to-cart"
                            onClick={() => this.props.onAdd(this.props.item)} />
            </div>
        )
    }
}
