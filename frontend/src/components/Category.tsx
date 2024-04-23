import React from "react"
import axios from "axios";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import Dish from "./Dish";


function Category(props) {
    const [dishes, setDishes] = React.useState([]);
    if (!dishes.length) {
        const url = `http://localhost:8000/api/dish/?category=${props.category}`
        axios.get(url)
            .then(response => {
                let data = []
                response.data.map(element => data.push(element));
                setDishes(data);
            })
            .catch(response => {
                console.log(response);
            })
    }
    return (
        <>
            <nav>
                {dishes.map((dish, index) =>
                    <Link
                        key={index}
                        to={`/${props.category}/${dish.id}`}
                    > {dish.name}
                    </Link>
                )}
            </nav>
        </>
    )
}

export default Category;