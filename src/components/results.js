import React from "react";

const Results = (props) => {
  const { store } = props;
  const votesAngularInPercent = () => {
    if (store.getState().angular) {
      return (
        (store.getState().angular /
          (store.getState().angular +
            store.getState().react +
            store.getState().vuejs)) *
        100
      );
    } else {
      return 0;
    }
  };
  const votesReactInPercent = () => {
    if (store.getState().react) {
      return (
        (store.getState().react /
          (store.getState().angular +
            store.getState().react +
            store.getState().vuejs)) *
        100
      );
    } else {
      return 0;
    }
  };
  const votesVuejsInPercent = () => {
    if (store.getState().vuejs) {
      return (
        (store.getState().vuejs /
          (store.getState().angular +
            store.getState().react +
            store.getState().vuejs)) *
        100
      );
    } else {
      return 0;
    }
  };
  const votesAngularInPercentStyle = () => {
    return {
      width: votesAngularInPercent() + "%",
    };
  };
  const votesReactInPercentStyle = () => {
    return {
      width: votesReactInPercent() + "%",
    };
  };
  const votesVuejsInPercentStyle = () => {
    return {
      width: votesVuejsInPercent() + "%",
    };
  };
  return (
    <div>
      <span className="label label-danger">
        Angular: {votesAngularInPercent().toFixed(2) + "%"}
      </span>
      <div className="progress progress-striped active">
        <div
          className="progress-bar progress-bar-danger"
          style={votesAngularInPercentStyle()}
        ></div>
      </div>
      <span className="label label-info">
        React: {votesReactInPercent().toFixed(2) + "%"}
      </span>
      <div className="progress progress-striped active">
        <div
          className="progress-bar progress-bar-info"
          style={votesReactInPercentStyle()}
        ></div>
      </div>
      <span className="label label-success">
        Vue.js: {votesVuejsInPercent().toFixed(2) + "%"}
      </span>
      <div className="progress progress-striped active">
        <div
          className="progress-bar progress-bar-success"
          style={votesVuejsInPercentStyle()}
        ></div>
      </div>
    </div>
  );
};
export default Results;
