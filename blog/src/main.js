import React, { Component } from "react";
import "./w3.css";
import Tiny from "./components/tinyArticle.jsx";
import "./mainpage_style.css";
import {
  // Card,
  // CardImg,
  // CardText,
  // CardBody,
  // CardTitle,
  // CardSubtitle,
  // Button,
  Container
} from "reactstrap";

class Main extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Mozanta Blog</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          />
        </head>
        <body>
          {/* <!-- Navigation Bar --> */}
          <div class="navbar">
            <a href="/main">Mozanta Blog</a>

            <search
              type="text"
              background-image="search.png"
              name="search"
              placeholder="Search.."
            />
          </div>

          {/* <!-- Header --> */}
          <div class="header">
            <h1 class="main_header">Mozanta Blog</h1>
            <p>
              <b>The community of developers & software engineers</b>
            </p>
          </div>

          {/* <!-- The flexible grid (content) --> */}
          <div class="row">
            <div class="side">
              <h2>About Me</h2>
            </div>
            <div class="main">
              <Container>
                <Tiny />
                <Tiny />
                <Tiny />
                <Tiny />
              </Container>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default Main;
