import React from "react";

import {Carousel, WingBlank} from "antd-mobile";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.pointInfo = this.props.location.state;
    console.log(this.props.location.state);
  }
  state = {
    data: ["1", "2", "3"],
    imgHeight: 178
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 1000);
  }
  render() {
    return (
      <WingBlank style={{touchAction: "none"}}>
        <Carousel
          className="space-carousel"
          style={{
            padding: "16px",
            background: " #DEF1E5",
            overflow: "hidden"
          }}
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          // beforeChange={(from, to) =>
          //   console.log(`slide from ${from} to ${to}`)
          // }
          afterChange={(index) => this.setState({slideIndex: index})}
        >
          {this.pointInfo.pointInfo.map((item) => (
            <div
              key={item.id}
              style={{
                display: "block",
                position: "relative",
                top: this.state.slideIndex === index ? -10 : 0,
                height: "200px",
                boxShadow: "2px 1px 1px rgba(0, 0, 0, 0.2)"
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{width: "100%", verticalAlign: "top"}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({imgHeight: "auto"});
                }}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Card;
