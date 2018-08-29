import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Carousel, WingBlank} from "antd-mobile";
import RED_POINT_IMG from "../../../../assets/img/Task/4locat.png";
import RED_BUTTON_IMG from "../../../../assets/img/Task/4btn_locat.png";
import Toast from "../../../../assets/img/Toast/box.png";
import ToastYes from "../../../../assets/img/Toast/button.png";
import ADetailCreator from "./ActivityDetailActions";
import {DISTANCE} from "../../../../../config/index";
import MenuActionCreator from "../../../Menu/MenuActions";
import return_img from "../../../../assets/img/Common/0btn_return.png";
import RETURN_IMG from "../../../../assets/img/return_img1.png";
import "./Detail.css";

class ActivityDetail extends React.Component {
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
    const params = {
      id: localStorage.id,
      college: localStorage.college
    };
    this.props.menuAction.fetchMenuData(params);
    //console.log()
    this.itemRender = this.itemRender.bind(this);
    console.log(this.props);
    this.pointInfo = this.props.menuReducer.menuRes.pointInfo;
    this.progress = this.props.menuReducer.menuRes.progress;
    console.log("refresh");
    console.log(this.progress);
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
          if (distance < 10) {
            that.setState({
              showToast: true,
              toDetail: true
            });
            that.props.ADetailAction.fetchADetailData(params);
            const temp = {
              name: item.name,
              intro: item.introduction,
              imgUrl: item.img_url
            };
            console.log("temp pointinfo");
            that.setState({
              currentPointInfo: temp
            });
          } else {
            alert("打卡失败，你和目的地的距离是" + parseInt(distance) + "米");
            that.props.history.push("/menu");
          }
          // that.props.ADetailAction.fetchADetailData(params);
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
      if (temp[i].type == "activity" && imgUrl.indexOf(temp[i].img_url) == -1) {
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
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              opacity: "0.6",
              marginTop: "50%"
            }}
          >
            <br />
            <br />
            恭喜你,
            <br />
            <br />
            已成功点亮该类别所有地点！
            <br />
            <br />
            <br />
          </div>
          <br />
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
              width: "65%",
              textAlign: "center",
              marginTop: "10%",
              marginLeft: "17.5%",
              height: "80px",
              fontSize: "16px",
              opacity: "0.7",
              whiteSpace: "pre-line"
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
      <div className="activity-detail-page-container" style={{opacity: "2"}}>
        <div>
          <img
            style={{
              position: "fixed",
              left: "20px",
              top: "20px",
              width: "10%",
              zIndex: "20"
            }}
            src={return_img}
            onClick={(e) => {
              this.props.history.push("/menu");
            }}
          />
        </div>
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
            //this.props.history.push("/card/activity/intro");
            this.props.history.push({
              pathname: "/card/activity/intro",
              state: this.state.currentPointInfo
            });
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
            if (this.state.toDetail == true) {
              this.setState({showToast: false});
              this.props.history.push({
                pathname: "/card/activity/intro",
                state: this.state.currentPointInfo
              });
            } else {
              this.props.history.push("/menu");
            }

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
                // padding: "16px",
                overflow: "hidden"
              }}
              frameOverflow="visible"
              cellSpacing={0}
              // slideWidth={1}
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
  const {menuReducer} = state;
  return {
    menuReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const ADetailAction = bindActionCreators(ADetailCreator, dispatch);
  const menuAction = bindActionCreators(MenuActionCreator, dispatch);
  return {
    ADetailAction,
    menuAction
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ActivityDetail)
);
