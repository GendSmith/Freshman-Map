import React from "react";
import title from "../../assets/img/LoginIn/1tasktitle.png";
import btnok from "../../assets/img/LoginIn/1btn_ok.png";
import "../LoginIn/LoginIn.css";
class TaskIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introMessage1: `心灵地图任务共分为学业、生活、名址及活动四个板块。
      新生需要在9月17日前将四个分类内的地点全部点亮。`,
      introMessage2: `
      根据提供的线索，去到指定的地点并选择打卡（在地图上选择该地点），选择完成后，如果地点匹配，则会出现点亮成功的信息。`,
      introMessage3: `
      在规定时间内点亮所有任务的同学可以在指定的地点获取对应的神秘奖励哦~`
    };
  }
  render() {
    return (
      <div className="page-container">
        <img
          src={title}
          style={{width: "50%", marginLeft: "25%", marginTop: "35%"}}
        />
        <p style={styles.introMessage}>
          {" "}
          {this.state.introMessage1}
          <br /> <br />
          {this.state.introMessage2}
          <br /> <br />
          {this.state.introMessage3}
          <br />
        </p>
        <div>
          <img src={btnok} style={styles.button}  onClick = {()=>{
              this.props.history.push("/loginin")
          }} />
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    marginTop: "5%",
    width: "30%",
    height: "10%",
    marginLeft: "35%",
    backgroundColor: "#239c5c"
  },
  introMessage: {
    width: "60%",
    backgroundColor: "#ffff",
    opacity: "0.7",
    marginLeft: "15%",
    padding: "15px",
    borderRadius: "5px"
  }
};

export default TaskIntro;
