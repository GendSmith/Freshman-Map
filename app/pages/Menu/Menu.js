import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withCookies, Cookies} from "react-cookie";
import {instanceOf} from "prop-types";
import study from "../../assets/img/Menu/2study.png";
import idea from "../../assets/img/Menu/2idea.png";
import food from "../../assets/img/Menu/2food.png";
import architecture from "../../assets/img/Menu/2architecture.png";

import "./Menu.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    const {cookies} = props;
    //console.log(cookies.get("name"));
    this.state = {};
  }

  render() {
    console.log(this);
    return (
      <div>
        <div style={{textAlign: "center", opacity: "0.5"}}>
          <h1>选择菜单</h1>
        </div>

        <div
          className="menu-page-block1"
          onClick={(e) => {
            this.props.history.push("/card/study");
          }}
        >
          <div className="small-img">
            <img src={study} style={{height: "50px", marginLeft: "10px"}} />
          </div>
          <div className="small-text">学业</div>
        </div>

        <div
          className="menu-page-block2"
          onClick={(e) => {
            this.props.history.push("/card/life");
          }}
        >
          <div className="small-img">
            <img src={food} style={{height: "50px"}} />
          </div>
          <div className="small-text">生活</div>
        </div>

        <div
          className="menu-page-block3"
          onClick={(e) => {
            this.props.history.push("/card/famous");
          }}
        >
          <div className="small-img">
            <img src={architecture} style={{height: "50px"}} />
          </div>
          <div className="small-text">名址</div>
        </div>

        <div
          className="menu-page-block4"
          onClick={(e) => {
            this.props.history.push("/card/activity");
          }}
        >
          <div className="small-img">
            <img src={idea} style={{height: "50px"}} />
          </div>
          <div className="small-text">活动</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
