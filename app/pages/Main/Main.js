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
import ActivityIntro from "../Card/Activiy/Detail/ActivityIntro";
import LifeIntro from "../Card/Life/Detail/LifeIntro";
import FamousIntro from "../Card/Famous/Detail/FamousIntro";
import StudyIntro from "../Card/Study/Detail/StudyIntro";
 
class Main extends React.Component {
  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        <AuthRouter />
        <Switch>
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/taskintro" component={TaskIntro} />

          <Route exact path="/card/life/detail" component={LifeDetail} />
          <Route exact path="/card/famous/detail" component={FamousDetail} />
          <Route exact path="/card/study/detail" component={StudyDetail} />
          <Route exact path="/card/activity/detail" component={ActivityDetail} />

          <Route exact path="/card/life/intro" component={LifeIntro} />
          <Route exact path="/card/famous/intro" component={FamousIntro} />
          <Route exact path="/card/study/intro" component={StudyIntro} />
          <Route exact path="/card/activity/intro" component={ActivityIntro} />


          <Route exact path="/card/life" component={Life} />
          <Route exact path="/card/famous" component={Famous} />
          <Route exact path="/card/study" component={Study} />
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
