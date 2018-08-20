import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./Life.css";

class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="life-page-container">
        <div style={styles.title}>
          <div>衣、食、住、行，</div>
          <div>难离。</div>
          <br />
          <div>身、心健康，</div>
          <div>勿轻。</div>
          <br />
          <div>网络、安全，</div>
          <div>不忘。</div>
        </div>
        <div>
          <img
            onClick={(e) => {
              console.log("life.js btn pressed");
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
    marginLeft: "35%",
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

export default Life;
