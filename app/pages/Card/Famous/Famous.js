import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./Famous.css";
class Famous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="famous-page-container">
        <div style={styles.title}>
          <div>聆听孙中山、鲁迅、陈寅恪、</div>
          <div>许崇清等名人与中大的故事。</div>
          <br />
          <div>细品红砖绿瓦的建筑。</div>
        </div>

        <div
          onClick={(e) => {
            this.props.history.push("/card/famous/detail");
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
    marginLeft: "25%",
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

export default withRouter(Famous);
