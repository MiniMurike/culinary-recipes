import React from "react";


import {connect, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import "../styles/MainPage.css";

function MainPage(props) {
    return (
        <div className={"flex"}>
            <h2>Категории:</h2>
            {props.dataStore.data.categories.map((category, index) =>
                <Link
                    key={index}
                    to={category}
                > {category}
                </Link>
            )}
        </div>
    )
}

// export default MainPage;

export default connect(
    state => ({
        dataStore: state
    }),
    dispatch => ({

    })
)(MainPage);