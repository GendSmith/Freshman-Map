import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Carousel, WingBlank} from "antd-mobile";
import activityImg from "../../../../assets/img/HomePage/activity.png";
import {Map, Marker, NavigationControl, InfoWindow} from "react-bmap";
import RED_POINT_IMG from "../../../../assets/img/Task/4locat.png";
import RED_BUTTON_IMG from "../../../../assets/img/Task/4btn_locat.png";

import "./Detail.css";
class ActivityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
    this.pointInfo = this.props.menuReducer.menuRes.pointInfo;
    this.progress = this.props.menuReducer.menuRes.progress;
    this.currentPointInfo = [];
    console.log(this.pointInfo);
    // console.log(progress);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const BMap = window.BMap;
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(
      function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          alert("您的位置：" + r.point.lng + "," + r.point.lat);
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
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].type == "activity") {
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
              console.log("item:");
              console.log(item);
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
                      width: "50%",
                      textAlign: "center",
                      marginTop: "30%",
                      marginLeft: "25%",
                      height: "100px"
                    }}
                  >
                    {item.tips}
                  </div>

                  <div>
                    <img
                      style={{width: "20%"}}
                      src={RED_POINT_IMG}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event("resize"));
                        this.setState({imgHeight: "auto"});
                      }}
                    />
                  </div>
                  <div>
                    <img
                      style={{width: "50%"}}
                      src={RED_BUTTON_IMG}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event("resize"));
                        this.setState({imgHeight: "auto"});
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </WingBlank>
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

export default withRouter(connect(mapStateToProps)(ActivityDetail));
