import React, { Component } from "react";
import "./App.css";
import "./w3.css";
import "./mainpage_style.css";

class Solo extends Component {
  render() {
    return (
      <div class="main">
        <div class="w3-card-4" margin="auto">
          <img src="pencil.jpg" alt="Pencil" width="100%" />
          <div class="w3-container" width="30%">
            <h4>
              Reactive Apps: Native adding push Notification to your app with
              Expo
            </h4>
            <p>
              This is an excerpt from my book the React Native Cookbook, 2nd
              Edition, from Packt Publishing.
            </p>
            <h5>
              <img
                class="avatar"
                src="http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918"
                alt="avatar"
              />
              Name, Dec 7, 2017
            </h5>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Solo;
