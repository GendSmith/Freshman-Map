import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import title from "../../assets/img/LoginIn/1title.png";
import btnok from "../../assets/img/LoginIn/1btn_ok.png";
import btntask from "../../assets/img/LoginIn/1btn_task.png";
import "./LoginIn.css";

class LoginIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: ""
    };
  }

  render() {
    return (
      <div className="page-container">
        <img
          src={title}
          style={{width: "50%", marginLeft: "25%", marginTop: "50%"}}
        />
        <div style={{marginTop: "50px"}}>
          <div style={{width: "60%", marginLeft: "20%"}}>
            <p style={{color: "white"}}>
              姓名 <input style={styles.input} />
            </p>
          </div>
          <div style={{width: "60%", marginLeft: "20%"}}>
            <p style={{color: "white"}}>
              学号 {"   "}
              <input style={styles.input} />
            </p>
          </div>
          <div style={{width: "60%", marginLeft: "20%"}}>
            <p style={{color: "white"}}>
              学院 {"   "}
              <input style={styles.input} />
            </p>
          </div>
        </div>
        <div>
          <img src={btnok} style={{...styles.button, marginLeft: "25%"}} />
          <img src={btntask} style={{...styles.button, marginLeft: "5%"}} />
        </div>
      </div>
    );
  }
}

const styles = {
  input: {
    marginTop: "15px",
    backgroundColor: "#ffff",
    width: "80%",
    height: "20px",
    borderRadius: "5px",
    opacity: "0.7"
  },
  button: {
    marginTop: "15%",
    width: "25%",
    height: "10%",
    backgroundColor: "#239c5c"
  }
};

export default withRouter(LoginIn);
