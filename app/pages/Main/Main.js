import React from "react";
import {connect} from "react-redux";
import {Route, Link, Switch, withRouter} from "react-router-dom";
import TaskIntro from "../TaskIntro/TaskIntro";
import Login from "../Login/Login";
import Menu from "../Menu/Menu";
import PhysicsActivity from "../PhysicsCollege/Activiy/Activity";
import PhysicsLife from "../PhysicsCollege/Life/Life";
import PhysicsFamous from "../PhysicsCollege/Famous/Famous";
import PhysicsStudy from "../PhysicsCollege/Study/Study";

class Main extends React.Component {
  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/taskintro" component={TaskIntro} />
          <Route path="/physics/activity" component={PhysicsActivity} />
          <Route path="/physics/life" component={PhysicsLife} />
          <Route path="/physics/famous" component={PhysicsFamous} />
          <Route path="/physics/study" component={PhysicsStudy} />
          <Route path="/menu" component={Menu}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
};

export default withRouter(connect(mapStateToProps)(Main));
