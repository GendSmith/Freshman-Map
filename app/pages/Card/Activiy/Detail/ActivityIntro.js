import React from "react";
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
  }

  render() {
    //console.log("what the fuck");
    //console.log(this);
    return (
      <div className="activity-detail-page-container">
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
            width: "75%",
            zIndex: "0",
            top: "13%",
            marginLeft: "12.5%"
          }}
        />
        <div
          style={{
            position: "fixed",
            top: "13%",
            marginLeft: "12.5%",
            width: "75%"
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
            style={{marginLeft: "20px", marginRight: "20px", marginTop: "20px"}}
          >
            介绍：
            {this.props.location.state.intro}
          </div>
        </div>
        <div
          onClick={(e) => {
            this.props.history.push("/menu");
          }}
        >
          <img
            src={NEXT_BTN}
            style={{
              position: "fixed",
              marginTop: "120%",
              width: "40%",
              marginLeft: "30%"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Intro;
