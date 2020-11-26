import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import myApp from "./reducers";
import Results from "./components/results";

/**
 * Store
    The store is the central objects that holds the state of the application. 
    The store is created by using the createStore method from the Redux library and passing over the Reducer as a parameter.
 */
let store = createStore(myApp);

function render() {
  ReactDOM.render(
    <div className="container">
      {/**
       * To get access to the application store, the store object is passed to the component as a property
       */}
      <App store={store} />

      <hr />
      <Results store={store} />
    </div>,
    document.getElementById("root")
  );
}

// This makes sure that the render function is called whenever the state of the application changes.
store.subscribe(render);

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
