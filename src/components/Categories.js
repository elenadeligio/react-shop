import React, { Component } from "react";

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "All Products"
                },
                {
                    key: "chairs",
                    name: "Chairs"
                },
                {
                    key: "lamps",
                    name: "Lamps"
                },
                {
                    key: "tables",
                    name: "Tables"
                }
            ]
        }
    }

    render() {
        return (
            <div className="filters">
                {this.state.categories.map(el => (
                    <div key={el.key}
                         onClick={() => this.props.selectCategory(el.key)}>{el.name}</div>
                    ))}
            </div>
        )
    }
}

export default Categories;