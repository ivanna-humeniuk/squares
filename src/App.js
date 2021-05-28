import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./app.scss";
import Home from "./page/home";

const App = () => {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
}

export default App;