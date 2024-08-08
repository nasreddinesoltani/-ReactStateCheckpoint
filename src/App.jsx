import React, { Component } from "react";
import Profile from "./Components/Profile";
import Button from "react-bootstrap/Button";
import Timer from "./Components/Timer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Flen Ben Falten",
      Bio: "Born in Tunisia",
      photo:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
      Profession: "Developer",
      show: false,
    };
  }

  showProfile = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        {this.state.show && (
          <>
            <Profile
              fullName={this.state.fullName}
              desc={`${this.state.Bio} and he is a ${this.state.Profession}`}
              photo={this.state.photo}
            />
            <Timer />
          </>
        )}

        <Button
          variant={this.state.show ? "warning" : "primary"}
          onClick={this.showProfile}
        >
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </Button>
      </div>
    );
  }
}
