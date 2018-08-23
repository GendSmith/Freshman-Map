import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class StudyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return <div>this is study detail page</div>;
  }
}

const mapStateToProps = (state) => {
  const {menuReducer} = state;
  return {
    menuReducer
  };
};

export default withRouter(connect(mapStateToProps)(StudyDetail));
