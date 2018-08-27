import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Carousel, WingBlank} from "antd-mobile";
import RED_POINT_IMG from "../../../../assets/img/Task/4locat.png";
import RED_BUTTON_IMG from "../../../../assets/img/Task/4btn_locat.png";
import Toast from "../../../../assets/img/Toast/box.png";
import ToastYes from "../../../../assets/img/Toast/button.png";
import LDetailActionCreator from "./LifeDetailActions";

import "./Detail.css";

class LifeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      showPointName: false,
      toDetail: false,
      currentPointInfo: {
        name: "",
        intro: "",
        imgUrl: ""
      }
    };
    this.itemRender = this.itemRender.bind(this);
    console.log(this.props);
    this.pointInfo = this.props.menuReducer.menuRes.pointInfo;
    this.progress = this.props.menuReducer.menuRes.progress;
    this.currentPointInfo = [];
    console.log(this.pointInfo);
    // console.log(progress);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(item) {
    let that = this;
    const point = {
      lng: item.lng,
      lat: item.lat
    };
    // this.setState({
    //   showToast: true
    // });
    const BMap = window.BMap;
    const map = new BMap.Map("");
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(
      function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          const distance = map.getDistance(r.point, point);
          const params = {
            id: localStorage.getItem("id"),
            type: item.type,
            imgUrl: item.img_url,
            lng: item.lng,
            lat: item.lat
          };
          // that.props.LDetailAction.fetchLDetailData(params);
          const temp = {
            name: item.name,
            intro: item.introduction,
            imgUrl: item.img_url
          };
          console.log("temp pointinfo");
          console.log(temp);
          that.setState({
            currentPointInfo: temp
          });

          if (distance < 50) {
            this.setState({
              showToast: true,
              toDetail:true
            });
            this.props.ADetailAction.fetchSDetailData(params);
          } else {
            alert("打卡失败，你和目的地的距离是" + parseInt(distance) + "米");
            that.props.history.push("/menu");
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
    let {imgUrl} = this.progress.life;

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].type == "life" && imgUrl.indexOf(temp[i].img_url) == -1) {
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

  itemRender() {
    let itemArray = [];
    const item = this.currentPointInfo;
    if (item.length == 0) {
      return (
        <div
          onClick={(e) => {
            this.props.history.push("/menu");
          }}
          style={{
            textAlign: "center",
            fontSize: "28px",
            opacity: "0.6",
            marginTop: "25%"
          }}
        >
          已完成
          <br />
          <br />
          点击返回菜单页面
          <br />
          <br />
        </div>
      );
    }
    for (let i = 0; i < item.length; i++) {
      itemArray.push(
        <div
          style={{
            width: "100%",
            height: "100%"
          }}
          key={item[i].id}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "28px",
              opacity: "0.6",
              marginTop: "10%"
            }}
          >
            提示
          </div>
          <div
            style={{
              width: "70%",
              textAlign: "center",
              marginTop: "10%",
              marginLeft: "15%",
              height: "80px",
              fontSize: "20px",
              opacity: "0.7"
            }}
          >
            {item[i].tips}
          </div>

          <div style={{marginTop: "13%"}}>
            <div>
              <img
                style={{width: "20%", marginLeft: "40%"}}
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
                this.handleButtonClick(item[i]);
              }}
            >
              <img
                style={{
                  width: "50%",
                  marginLeft: "25%",
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
          <div style={{marginBottom: "30px", height: "50px"}}>
            <div
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                this.setState({imgHeight: "auto"});
              }}
              style={{
                textDecoration: "underline",
                textAlign: "center",
                marginTop: "30px"
              }}
              onClick={(e) => {
                this.setState({
                  showPointName: true
                });
              }}
            >
              （ 实在不知道？戳这里 ）
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: "20px",
                textAlign: "center",
                display: this.state.showPointName ? "block" : "none"
              }}
            >
              {item[i].name}
            </div>
          </div>
        </div>
      );
    }
    return itemArray;
  }

  render() {
    return (
      <div className="life-detail-page-container">
        <img
          src={Toast}
          style={{
            width: "70%",
            marginLeft: "15%",
            position: "fixed",
            marginTop: "25%",
            zIndex: "1",
            display: this.state.showToast ? "block" : "none"
          }}
        />
        <div
          style={{
            zIndex: "1",
            position: "fixed",
            marginLeft: "32%",
            marginTop: "60%",
            textAlign: "center",
            fontSize: "16px",
            color: "white",
            display: this.state.showToast ? "block" : "none"
          }}
        >
          恭喜你
          <br />
          点亮了一个新地点
        </div>

        <img
          src={ToastYes}
          style={{
            zIndex: "2",
            position: "fixed",
            marginLeft: "35%",
            marginTop: "94%",
            width: "30%",
            display: this.state.showToast ? "block" : "none"
          }}
          onClick={(e) => {
            this.setState({showToast: false});
            this.props.history.push({
              pathname: "/card/life/intro",
              state: this.state.currentPointInfo
            });
            // this.props.history.push("/card/life/intro");
            // console.log("click totast");
          }}
        />

        <div
          style={{
            zIndex: "4",
            position: "fixed",
            marginLeft: "30%",
            marginTop: "95%",
            width: "40%",
            textAlign: "center",
            display: this.state.showToast ? "block" : "none"
          }}
          onClick={(e) => {
            this.setState({showToast: false});
            //this.props.history.push("/card/life/intro");
            this.props.history.push({
              pathname: "/card/life/intro",
              state: this.state.currentPointInfo
            });
            // console.log("click totast");
          }}
        >
          确定
        </div>

        <div>
          <WingBlank>
            <Carousel
              afterChange={() => {
                this.setState({
                  showPointName: false
                });
              }}
              removeClippedSubviews={false}
              style={{
                //    padding: "16px",
                overflow: "hidden"
              }}
              frameOverflow="visible"
              cellSpacing={0}
              //   slideWidth={1}
              infinite
              // autoplay
            >
              {this.itemRender()}
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
