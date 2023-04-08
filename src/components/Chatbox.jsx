import React, { Component } from "react";

const styles = {
  height: "34px",
  transition: "height 0.5s linear",
};
const stylesTwo = {
  height: "300px",
  transition: "height 0.5s linear",
};
class Chatbox extends Component {
  state = {
    on: false,
  };
  toggle = () => {
    this.setState((prev) => ({ on: !prev.on }));
  };
  render() {
    return (
      <>
        <div style={this.state.on ? styles : stylesTwo}>
          {this.props.render({
            on: this.state.on,
            toggle: this.toggle,
          })}
        </div>
      </>
    );
  }
}

export default Chatbox;
