import React, { Component } from "react";
import Card from "react-bootstrap/Card";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.photo} />
          <Card.Body>
            <Card.Title> {this.props.fullName} </Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
