import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./Study.css";

class Study extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  render() {
    return (
      <div className="study-page-container">
        <div style={styles.title}>
          <div>大学期间，</div>
          <div>陪伴我们最多的就是学习</div>
          <br />
          <div>课室、图书馆、实验室等，</div>
          <div>将会是你储备知识的加油站。</div>
        </div>
        <div>
          <img
            onClick={(e) => {
              console.log("study.js btn pressed");
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
    marginLeft: "25%",
    //textAlign:"center",
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

export default Study;
