import React from "react";
import BACK from "../../assets/img/End/图层.png";
import UP from "../../assets/img/End/奖牌.png";
import DOWN from "../../assets/img/End/礼物.png";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import rankActionCreator from "./EndActions";

class End extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: localStorage.getItem("rank"),
      college: localStorage.getItem("college")
    };
    this.name = localStorage.getItem("name");
    console.log("this.rank" + this.state.rank);
  }
  componentWillMount() {
    console.log("componentwillmount");
    console.log(localStorage.getItem("id"));
    const params = {
      id: localStorage.getItem("id")
    };
    this.props.rankAction.fetchRankData(params);
  }

  render() {
    const {rankRes} = this.props.rankReducer;
    console.log("reakRes:");
    console.log(rankRes);
    return (
      <div>
        <div>
          <img
            src={BACK}
            style={{
              position: "fixed",
              top: "15%",
              width: "70%",
              marginLeft: "15%"
            }}
          />
          <div
            style={{
              position: "fixed",
              top: "22%",
              width: "60%",
              marginLeft: "20%"
            }}
          >
            <div style={{color: "white"}}>
              {this.name}:<br />
              恭喜你成为第
              {this.state.rank}
              个点亮心灵地图的人！
            </div>
            <img
              src={UP}
              style={{width: "27%", marginLeft: "35%", marginTop: "5%"}}
            />
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            top: "53%",
            width: "60%",
            marginLeft: "20%"
          }}
        >
          <div style={{color: "white"}}>
            请凭此截图于{this.state.college=="心理学系"?"规定时间":"9月17号码"}前到
            {this.state.college == "物理学院"
              ? "十友堂101"
              : this.state.college == "药学院"
                ? "药学院办公室"
                : "活动地点处"}
            处领取对应的奖励～
          </div>
          <img
            src={DOWN}
            style={{width: "40%", marginTop: "5%", marginLeft: "30%"}}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {rankReducer} = state;
  return {
    rankReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const rankAction = bindActionCreators(rankActionCreator, dispatch);
  return {
    rankAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(End);
