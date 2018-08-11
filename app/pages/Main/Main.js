import React from "react";
import {connect} from "react-redux";
import {Route, Link, Switch, withRouter} from "react-router-dom";
import TaskIntro from "../TaskIntro/TaskIntro";
import Login from "../Login/Login";

class Main extends React.Component {
  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        <Login />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/taskintro" component={TaskIntro} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
};

export default withRouter(connect(mapStateToProps)(Main));
