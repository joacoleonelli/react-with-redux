import React from "react";
import { voteAngular, voteReact, voteVuejs } from "./actions";
import "./App.css";
import react_logo from "./assets/react_logo.png";
import angular_logo from "./assets/angular_logo.png";
import vuejs_logo from "./assets/vuejs_logo.png";

const App = (props) => {
  const { store } = props;
  const handleVoteAngular = () => {
    store.dispatch(voteAngular());
  };
  const handleVoteReact = () => {
    store.dispatch(voteReact());
  };
  const handleVoteVuejs = () => {
    store.dispatch(voteVuejs());
  };
  return (
    <div>
      <div className="jumbotron" style={{ textAlign: "center" }}>
        <h2>What is your favorite front-end development framework 2020?</h2>
        <h4>Click on the logos below to vote!</h4>
        <br />
        <div className="row">
          <div className="col-xs-offset-3 col-xs-2">
            <img
              src={angular_logo}
              height="96"
              alt="Angular"
              onClick={handleVoteAngular}
            ></img>
          </div>
          <div className="col-xs-2">
            <img
              src={react_logo}
              height="96"
              alt="React"
              onClick={handleVoteReact}
            ></img>
          </div>
          <div className="col-xs-2">
            <img
              src={vuejs_logo}
              height="86"
              alt="Vue.js"
              onClick={handleVoteVuejs}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
