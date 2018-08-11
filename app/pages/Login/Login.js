import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import title from "../../assets/img/Login/1title.png";
import btnok from "../../assets/img/Login/1btn_ok.png";
import btntask from "../../assets/img/Login/1btn_task.png";
import "./Login.css";
import loginActionCreator from "./LoginActions";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
      name: "",
      schoolID: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.loginAction.fetchLoginData(this.state);
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
              姓名{" "}
              <input
                style={styles.input}
                type="text"
                value={this.state.name}
                onChange={(e) => {
                  this.setState({name: e.target.value});
                }}
              />
            </p>
          </div>
          <div style={{width: "60%", marginLeft: "20%"}}>
            <p style={{color: "white"}}>
              学号 {"   "}
              <input
                style={styles.input}
                type="text"
                value={this.state.schoolID}
                onChange={(e) => {
                  this.setState({schoolID: e.target.value});
                  //console.log(this.state)
                }}
              />
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
          <img
            src={btnok}
            style={{...styles.button, marginLeft: "25%"}}
            onClick={() => {
              console.log(this.state);
              this.onSubmit();
            }}
          />
          <img
            src={btntask}
            style={{...styles.button, marginLeft: "5%"}}
            onClick={() => {
              this.props.history.push("/taskintro");
            }}
          />
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

const mapStateToProps = (state) => {
  const {loginReducer} = state;
  return {
    loginReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const loginAction = bindActionCreators(loginActionCreator, dispatch);
  return {
    loginAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
