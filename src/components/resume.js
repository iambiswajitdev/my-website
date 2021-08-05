import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { callIcon, mailIcon, addIcon } from "../utility/commonStaticData";
import HeaderNav from "./header-nav";
import Logo from "./logo";

const Resume = () => {
  return (
    <>
      <HeaderNav />
      <h1 className="myHeading">my Resume</h1>
      <div className="myResume">
        <Row>
          <Col lg={2} xs={12}>
            <div className="logoMy">
              <Logo />
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <h2 className="nameTitle">Biswajit Mondal</h2>
            <p className="positionMY">front end developer</p>
            <p>
              Hi, my name is Biswajit Mondal and I'm a Software Developer.
              Welcome to my personal website
            </p>
          </Col>
          <Col lg={4} xs={12}>
            <div className="socal">
              <ul>
                <li>
                  <Link>{callIcon} 7908043895</Link>
                </li>
                <li>
                  <Link>{mailIcon} mrbiswajitmondal24@gmail.com</Link>
                </li>
                <li>
                  <Link>{addIcon} Kolkata,India</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="borderTop">
          <Col lg={9} xs={12}>
            <div className="workExprince">
              <h2>work experience</h2>
            </div>
          </Col>
          <Col lg={3} xs={12}></Col>
        </Row>
      </div>
    </>
  );
};

export default Resume;
