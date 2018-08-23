import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter, Route} from "react-router-dom";
import "./Activity.css";
class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointInfo: []
    };
    this.pointInfo = this.props.location.state;
  }

  componentWillMount(props) {}

  render() {
    return (
      <div className="activity-page-container">
        <div style={styles.title}>
          <div>运动，素拓，社团，</div>
          <div>丰富你的大学生活</div>
        </div>

        <div
          onClick={(e) => {
            console.log("onclick");
            this.props.history.push("/card/activity/detail");
            //console.log(this.props.history)
          }}
        >
          <img
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

export default withRouter(Activity);
