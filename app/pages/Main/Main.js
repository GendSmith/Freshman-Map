import React from "react";
import {connect} from "react-redux";
import {Route, Link, Switch, withRouter} from "react-router-dom";
import {withCookies, Cookies} from "react-cookie";
import {instanceOf} from "prop-types";
import AuthRouter from "../AuthRouter/AuthRouter";
import TaskIntro from "../TaskIntro/TaskIntro";
import Login from "../Login/Login";
import Menu from "../Menu/Menu";
import Activity from "../Card/Activiy/Activity";
import Life from "../Card/Life/Life";
import Famous from "../Card/Famous/Famous";
import Study from "../Card/Study/Study";
import Card from "../Card/Card";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ben"
    };
    console.log(this.props);
  }

  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        <AuthRouter />
        <Switch>
          <Route path="/menu" component={Menu} />

          <Route path="/login" component={Login} />
          <Route path="/taskintro" component={TaskIntro} />
          <Route path="/card/activity" component={Activity} />
          <Route path="/card/life" component={Life} />
          <Route path="/card/famous" component={Famous} />
          <Route path="/card/study" component={Study} />
          <Route path="/card" component={Card} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
};

export default withRouter(connect(mapStateToProps)(Main));
