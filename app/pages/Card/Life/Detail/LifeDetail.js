import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
class LifeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>this is life detail page</div>;
  }
}

const mapStateToProps = (state) => {
  const {menuReducer} = state;
  return {
    menuReducer
  };
};

export default withRouter(connect(mapStateToProps)(LifeDetail));
