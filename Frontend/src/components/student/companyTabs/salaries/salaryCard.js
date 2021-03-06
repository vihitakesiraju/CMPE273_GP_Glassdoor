import React, { Component } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import salaryCard from "./salaryCard";
import Axios from "axios";

export default class SalaryCard extends Component {
  
  render = () => {
    //const avgsalary = this.props.baseSalary + 3.4*this.props.bonuses;
    console.log(this.props);
    const avgpay = (this.props.avg).toFixed(2);
    return (
      <div>
        <Container
          className="block-example border"
          style={{ marginTop: "20px", width: "80%" }}
        >
          <Col>
            <Row>
              <p style={{ color: "#3f76cc", fontSize: "22px" }}>
                <b>"{this.props._id}"</b>
              </p>
            </Row>
            <Row>
              <Col md="4">
                <p>Avg. Total Pay: ${avgpay}/yr</p>
              </Col>
              <Col md="4">
                <p>Minimum Pay: ${this.props.min}/yr</p>
              </Col>
              <Col md="4">
                <p>Maximum Pay: ${this.props.max}/yr</p>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    );
  };
}

//export default Reviews
