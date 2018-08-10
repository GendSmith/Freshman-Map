import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class LoginIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: ""
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={{width: "60%", marginLeft: "20%"}}>
          学号 <input style={{border: "groove"}} />
        </div>
        <div style={{width: "60%", marginLeft: "20%"}}>
          姓名 <input style={{border: "groove"}} />
        </div>
        <img  style={{width:"100%"}} src = {require("http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg")}/>
      </div>
    );
  }
}

const styles = {
  container: {
    background: require("http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg")
  }
};

export default withRouter(LoginIn);
