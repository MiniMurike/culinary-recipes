import React from "react";
import {useParams} from "react-router";
import axios from "axios";


const initState = {
    id: 0,
    name: "",
    category: "",
    ingredients: "",
    cooking_desc: ""
}

function Dish() {
    const [dishData, setDishData] = React.useState(initState);
    if (!dishData.id) {
        const {id} = useParams();
        axios.get("http://localhost:8000/api/dish/" + id)
            .then(response => {
                setDishData(response.data);
            })
            .catch(response => {
                console.log(response);
            })
    }
    return (
        <div>
            {dishData.id ?
                <>
                    <div>Категория: {dishData.category}</div>
                    <div>Блюдо: {dishData.name}</div>
                    <div>Ингридиенты: {dishData.ingredients}</div>
                    <div>Готовка: {dishData.cooking_desc}</div>
                </>
                : ""
            }
        </div>
    )
}

export default Dish;