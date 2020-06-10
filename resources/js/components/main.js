import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Film from "./film";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
function Main() {
    return (
        <Fragment>
            <Router>
                <Route exact path="/films" component={Film}></Route>
            </Router>
        </Fragment>
    );
}

export default Main;

if (document.getElementById("app")) {
    ReactDOM.render(<Main />, document.getElementById("app"));
}
