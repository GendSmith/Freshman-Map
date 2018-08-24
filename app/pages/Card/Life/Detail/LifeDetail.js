import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Carousel, WingBlank} from "antd-mobile";
import RED_POINT_IMG from "../../../../assets/img/Task/4locat.png";
import RED_BUTTON_IMG from "../../../../assets/img/Task/4btn_locat.png";
import Toast from "../../../../assets/img/Toast/定位成功.png";
import ToastYes from "../../../../assets/img/Toast/是.png";
import LDetailActionCreator from "./LifeDetailActions";

import "./Detail.css";

class LifeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
    console.log(this.props);
    this.pointInfo = this.props.menuReducer.menuRes.pointInfo;
    this.progress = this.props.menuReducer.menuRes.progress;
    this.currentPointInfo = [];
    console.log(this.pointInfo);
    // console.log(progress);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(item) {
    const point = {
      lng: item.lng,
      lat: item.lat
    };
    this.setState({
      showToast: true
    });
    const BMap = window.BMap;
    const map = new BMap.Map("");
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(
      function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          const distance = map.getDistance(r.point, point);
          const params = {
            id: item.id,
            type: item.type,
            pointName: item.img_url,
            lng: item.lng,
            lat: item.lat
          };
          if (distance < 50) {
            this.props.ADetailAction.fetchLDetailData(params);
          } else {
            //alert 打卡失败
          }
          console.log("distance:" + distance);
          //  alert("您的位置：" + r.point.lng + "," + r.point.lat);
        } else {
          if (this.getStatus == BMAP_STATUS_PERMISSION_DENIED) {
            alert("请开启位置权限～");
          } else {
            alert("其他错误，code:" + this.getStatus());
          }
        }
      },
      {enableHighAccuracy: true}
    );
  }

  componentWillMount() {
    let temp = this.pointInfo;
    let {imgUrl} = this.progress.activity;

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].type == "life" && imgUrl.indexOf(temp[i].img_url) != -1) {
        this.currentPointInfo.push(temp[i]);
      }
    }
    console.log(this.currentPointInfo);
  }

  componentDidMount() {
    this.fixCarousel();
  }

  fixCarousel() {
    setTimeout(function() {
      window.dispatchEvent(new Event("resize"));
    }, 0);
  }

  render() {
    return (
      <div className="activity-detail-page-container">
        <div
          style={{
            position: "fixed",
            zIndex: "1",
            marginTop: "30%",
            display: this.state.showToast ? "block" : "none"
          }}
          onClick={(e) => {
            this.setState({showToast: false});
            // console.log("click totast");
          }}
        >
          <img
            src={Toast}
            style={{
              width: "120%"
            }}
          />
        </div>
        <img
          src={ToastYes}
          style={{
            zIndex: "2",
            position: "fixed",
            marginLeft: "45%",
            marginTop: "78%",
            width: "30%",
            display: this.state.showToast ? "block" : "none"
          }}
          onClick={(e) => {
            this.setState({showToast: false});
            // console.log("click totast");
          }}
        />
        <div>
          <WingBlank>
            <Carousel
              removeClippedSubviews={false}
              style={{
                padding: "16px",
                overflow: "hidden"
              }}
              frameOverflow="visible"
              cellSpacing={30}
              slideWidth={1}
              infinite
              // autoplay
            >
              {this.currentPointInfo.map((item) => {
                // console.log("item:");
                //console.log(item);
                return (
                  <div
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                    key={item.id}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "28px",
                        opacity: "0.6",
                        marginTop: "25%"
                      }}
                    >
                      提示
                    </div>
                    <div
                      style={{
                        width: "60%",
                        textAlign: "center",
                        marginTop: "15%",
                        marginLeft: "25%",
                        height: "80px",
                        fontSize: "20px",
                        opacity: "0.7"
                      }}
                    >
                      {item.tips}
                    </div>
                    <div style={{marginTop: "20%"}}>
                      <div>
                        <img
                          style={{width: "20%", marginLeft: "45%"}}
                          src={RED_POINT_IMG}
                          onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event("resize"));
                            this.setState({imgHeight: "auto"});
                          }}
                        />
                      </div>
                      <div
                        onClick={(e) => {
                          this.handleButtonClick(item);
                        }}
                      >
                        <img
                          style={{
                            width: "50%",
                            marginLeft: "30%",
                            marginTop: "8%"
                          }}
                          src={RED_BUTTON_IMG}
                          onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event("resize"));
                            this.setState({imgHeight: "auto"});
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </WingBlank>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {menuReducer, LDetailReducer} = state;
  return {
    menuReducer,
    LDetailReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const LDetailAction = bindActionCreators(LDetailActionCreator, dispatch);
  return {
    LDetailAction
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LifeDetail)
);
