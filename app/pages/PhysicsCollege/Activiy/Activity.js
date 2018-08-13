import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./Activity.css";
class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="activity-page-container">
        <div style={styles.title}>
          <div>运动，素拓，社团，</div>
          <div>丰富你的大学生活</div>
        </div>

        <div>
          <img
            onClick={(e) => {
              console.log("activity.js btn pressed");
            }}
            style={styles.nextBtn}
            src={require("../../../assets/img/HomePage/0btn_next.png")}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    position: "absolute",
    marginLeft: "30%",
    marginTop: "30%",
    opacity: "0.7"
  },
  nextBtn: {
    width: "20%",
    position: "absolute",
    bottom: "50px",
    right: "20px"
  }
};

export default Activity;
