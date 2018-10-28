import React from "react";
import Header from "./common/Header";
import {Provider} from "react-redux";
import store from "./store/index";

export default class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Header />
            </Provider>
        )
    }
}