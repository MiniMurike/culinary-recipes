import React from "react";
import {createRoot} from "react-dom/client";
import store from "./storage/store"
import {Provider} from "react-redux";

import App from "./components/App";
import "./styles/global.css"

import Header from "./components/Header";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);
root.render(
    <Provider store={store}>
        <Header />
        <App />
    </Provider>
);