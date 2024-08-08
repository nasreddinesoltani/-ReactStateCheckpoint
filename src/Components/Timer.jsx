import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      intervall: null,
    };
  }
  componentDidMount() {
    this.setState({
      intervall: setInterval(
        () => this.setState({ counter: this.state.counter + 1 }),
        1000
      ),
    });
  }
  render() {
    return <div style={{ fontSize: "25px" }}> {this.state.counter} </div>;
  }
}
