import React from "react";
import {bindActionCreators} from "redux";
import {withCookies, Cookies} from "react-cookie";
import {Route, Link, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import authActionCreator from "./AuthRouterActions";
import Login from "../Login/Login";

class AuthRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    this.props.authAction.fetchAuthData();
  }

  render() {
    const loginurl = "/login";
    const pathname = this.props.location.pathname;
    console.log(pathname);

    if (loginurl == pathname) {
      console.log("get url");
      return null;
    }

    const {AuthRes} = this.props.authReducer;
    if (AuthRes.CODE == 201) {
      console.log("cookie 失效");
      console.log(this.props);
      this.props.history.push("/login");
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  const {authReducer} = state;
  return {
    authReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const authAction = bindActionCreators(authActionCreator, dispatch);
  return {
    authAction
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthRouter)
);

// export default AuthRouter;
