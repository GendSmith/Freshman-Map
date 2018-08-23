import React from "react";
import {connect} from "react-redux";
import {Route, Link, Switch, withRouter} from "react-router-dom";
import AuthRouter from "../AuthRouter/AuthRouter";
import TaskIntro from "../TaskIntro/TaskIntro";
import Login from "../Login/Login";
import Menu from "../Menu/Menu";
import Activity from "../Card/Activiy/Activity";
import Life from "../Card/Life/Life";
import Famous from "../Card/Famous/Famous";
import Study from "../Card/Study/Study";
import ActivityDetail from "../Card/Activiy/Detail/ActivityDetail";
import StudyDetail from "../Card/Study/Detail/StudyDetail";
import FamousDetail from "../Card/Famous/Detail/FamousDetail";
import LifeDetail from "../Card/Life/Detail/LifeDetail";

class Main extends React.Component {
  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        <AuthRouter />
        <Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/login" component={Login} />
          <Route path="/taskintro" component={TaskIntro} />

          <Route path="/card/life/detail" component={LifeDetail} />
          <Route path="/card/famous/detail" component={FamousDetail} />
          <Route path="/card/study/detail" component={StudyDetail} />
          <Route path="/card/activity/detail" component={ActivityDetail} />

          <Route path="/card/life" component={Life} />
          <Route path="/card/famous" component={Famous} />
          <Route path="/card/study" component={Study} />

          <Route exact path="/card/activity" component={Activity} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
};

export default withRouter(connect(mapStateToProps)(Main));
