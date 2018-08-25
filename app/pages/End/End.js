import React from "react";
import BACK from "../../assets/img/End/图层.png";
import UP from "../../assets/img/End/奖牌.png";
import DOWN from "../../assets/img/End/礼物.png";

class End extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src={BACK}
            style={{
              position: "fixed",
              top: "20%",
              width: "70%",
              marginLeft: "13.5%"
            }}
          />
          <div
            style={{
              position: "fixed",
              top: "27%",
              width: "60%",
              marginLeft: "17.5%"
            }}
          >
            <div style={{color: "white"}}>
              name:
              <br />
              恭喜你成为第xxx个点亮心灵地图的人！
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
            top: "55%",
            width: "60%",
            marginLeft: "17.5%"
          }}
        >
          <div style={{color: "white"}}>
            请凭此截图于9月10号前到xxx处领取对应的奖励～
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
export default End;
