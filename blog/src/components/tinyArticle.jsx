import React, { Component } from "react";
import "C:/learn/blog/blog/src/w3.css";
import "C:/learn/blog/blog/src/style.css";
import "C:/learn/blog/blog/src/mainpage_style.css";
import { Row, Col } from "reactstrap";

class Tiny extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <div class="boxL">
              <div class="w3-card-4 w3-cell" width="30%">
                <img src="pencil.jpg" alt="Pencil" width="100%" />
                <div class="w3-container" width="30%">
                  <h4>
                    Reactive Apps: Native adding push Notification to your app
                    with Expo
                  </h4>
                  <h5>
                    <img
                      class="avatar"
                      src="http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918"
                      alt="avatar"
                    />
                    Name,<div>Dec 7, 2017</div>
                  </h5>
                </div>
                <br />
              </div>
            </div>
          </Col>
          <Col>
            <div class="boxL" width="auto">
              <div class="w3-card-4 w3-cell" width="auto">
                <img src="pencil.jpg" alt="Pencil" width="100%" />
                <div class="w3-container" width="auto">
                  <h4>
                    Reactive Apps: Native adding push Notification to your app
                    with Expo
                  </h4>
                  <h5>
                    <img
                      class="avatar"
                      src="http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918"
                      alt="avatar"
                    />
                    Name,<div>Dec 7, 2017</div>
                  </h5>
                </div>
                <br />
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Tiny;
