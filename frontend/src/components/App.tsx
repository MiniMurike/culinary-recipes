import React, {useState} from "react";
import axios from "axios";
import {connect, useDispatch, useSelector} from "react-redux";
import {set} from "../storage/dataSlice";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Category from "./Category"
import MainPage from "./MainPage";
import Dish from "./Dish";


function App(props) {
    const dispatch = useDispatch();

    if (!props.dataStore.data.isLoaded) {
        axios.get("http://localhost:8000/api/category")
            .then(response => {
                let data = []
                response.data.map(el => {
                    data.push(el.name);
                })
                dispatch(set(data))
            })
            .catch(response => {
                console.log(response);
            })
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {props.dataStore.data.categories.map((category, index) =>
                        <React.Fragment key={index}>
                            <Route
                                path={category}
                                element={<Category category={category} />}
                            />
                            <Route
                                path={`${category}/:id`}
                                element={<Dish />}
                            />
                        </React.Fragment>
                    )}
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default connect(
    state => ({
        dataStore: state
    }),
    dispatch => ({

    })
)(App);