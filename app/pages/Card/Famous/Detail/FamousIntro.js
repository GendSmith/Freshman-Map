import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IMG_URL} from "../../../../../config/index";
import BACK_IMG from "../../../../assets/img//Success/5bg_photo.png";
import "./Detail.css";
class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.imgUrl =
    //   this.props.SDetailReducer.res.imgUrl ?
    //   this.props.SDetailReducer.res.imgUrl :
    //   "east/east_study_public_1.png";
    this.imgUrl = "east/east_study_public_1.png";
    console.log(this.imgUrl);
  }

  render() {
    return (
      <div className="famous-detail-page-container">
        <img
          src={BACK_IMG}
          style={{
            position: "fixed",
            width: "75%",
            zIndex: "0",
            top: "20%",
            marginLeft: "12.5%"
          }}
        />
        <div
          style={{
            position: "fixed",
            top: "20%",
            marginLeft: "12.5%",
            width: "75%",
          }}
        >
          <img
            src={IMG_URL + this.imgUrl}
            style={{
              width:"100%",
              zIndex: "1"
            }}
          />
          <div style={{marginLeft:"20px",marginRight:"20px",marginTop:"20px"}}>
            介绍：
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {menuReducer, SDetailReducer} = state;
  return {
    menuReducer,
    SDetailReducer
  };
};

export default withRouter(connect(mapStateToProps)(Intro));
