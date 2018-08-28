import React from "react";
import {withRouter} from "react-router-dom";
import MenuActionCreator from "../../../Menu/MenuActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IMG_URL} from "../../../../../config/index";
import BACK_IMG from "../../../../assets/img//Success/5bg_photo.png";
import NEXT_BTN from "../../../../assets/img/Success/5btn_next.png";
import "./Detail.css";
class Intro extends React.Component {
  constructor(props) {
    super(props);
    //console.log("this:");
    //console.log(this.props.location.state);
    this.state = {};
    this.imgUrl = "east/east_study_public_1.png";
    const params = {
      id: localStorage.id,
      college: localStorage.college
    };
    this.props.menuAction.fetchMenuData(params);
  }

  render() {
    //console.log("what the fuck");
    //console.log(this);
    return (
      <div className="study-detail-page-container">
        <div
          style={{
            fontSize: "25px",
            opacity: "0.6",
            marginTop: "30px",
            textAlign: "center"
          }}
        >
          {this.props.location.state.name}
        </div>
        <img
          src={BACK_IMG}
          style={{
            position: "fixed",
            width: "82%",
            zIndex: "0",
            top: "13%",
            marginLeft: "9%"
          }}
        />
        <div
          style={{
            position: "fixed",
            top: "13%",
            marginLeft: "9%",
            width: "82%"
          }}
        >
          <img
            src={IMG_URL + this.props.location.state.imgUrl}
            style={{
              width: "100%",
              zIndex: "1"
            }}
          />
          <div
            style={{marginLeft: "15px", marginRight: "15px", marginTop: "15px"}}
          >
            介绍：
            {this.props.location.state.intro}
          </div>
        </div>
        <div
          onClick={(e) => {
            this.props.history.push("/card/study/detail");
           // this.props.history.push("/menu");
          }}
        >
          <img
            src={NEXT_BTN}
            style={{
              position: "fixed",
              marginTop: "115%",
              width: "40%",
              marginLeft: "30%"
            }}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {menuReducer} = state;
  return {
    menuReducer
  };
};

const mapDispatchToProps = (dispatch) => {
 // const ADetailAction = bindActionCreators(ADetailCreator, dispatch);
  const menuAction = bindActionCreators(MenuActionCreator, dispatch);
  return {
    //ADetailAction,
    menuAction
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Intro)
);
