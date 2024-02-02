import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Items} from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Vitra - Organic Conference",
                    img: "chair1.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    category: "chairs",
                    price: "1930.99"
                },
                {
                    id: 2,
                    title: "Vitra - Petit Potence",
                    img: "lamp1.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    category: "lamps",
                    price: "949.99"
                },
                {
                    id: 3,
                    title: "Vitra - Noguchi Table",
                    img: "table1.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    category: "tables",
                    price: "3499.99"
                },
                {
                    id: 4,
                    title: "Vitra - Plastic Chair",
                    img: "chair2.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    category: "chairs",
                    price: "490.99"
                },
                {
                    id: 5,
                    title: "Vitra - Lampe de Bureau",
                    img: "lamp2.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    category: "lamps",
                    price: "269.99"
                },
                {
                    id: 6,
                    title: "Vitra - Dining Table",
                    img: "table2.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    category: "tables",
                    price: "4489.99"
                },
                {
                    id: 7,
                    title: "Vitra - RAR Chair",
                    img: "chair3.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    category: "chairs",
                    price: "677.99"
                },

                {
                    id: 8,
                    title: "Vitra - Akari Lamp",
                    img: "lamp3.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    category: "lamps",
                    price: "819.99"
                },
                {
                    id: 9,
                    title: "Vitra - Occasional Table",
                    img: "table3.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    category: "tables",
                    price: "289.99"
                }
            ]
        }
        this.state.currentItems = this.state.items;
        this.cartAdd = this.cartAdd.bind(this);
        this.cartDelete = this.cartDelete.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
    }

    cartAdd(item){
        let isInArray = false

        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })

        if (!isInArray)
            this.setState({ orders: [...this.state.orders, item] })
    }

    cartDelete(id) {
        this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
    }

    selectCategory(category) {
        if(category === "all") {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    render() {
        return (
            <div className="content">
                <Header orders={this.state.orders} onDelete={this.cartDelete} />
                <Categories selectCategory={this.selectCategory} />
                <Items items={this.state.currentItems} onAdd={this.cartAdd} />
                <Footer />
            </div>
        )
    }
}

export default App;
