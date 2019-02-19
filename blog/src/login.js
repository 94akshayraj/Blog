import React, { Component } from "react";
// import "./App.css";
import "C:/learn/blog/blog/src/style.css";
import "C:/learn/blog/blog/src/w3.css";
// import "C:/learn/blog/blog/src/style.css";
import {
  // Card,
  // CardImg,
  // CardText,
  // CardBody,
  // CardTitle,
  // CardSubtitle,
  Button,
  Form
} from "reactstrap";

class Login extends Component {
  state = {
    data: [],
    id: 0,
    fname: null,
    password: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 10000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
    console.log(this.state.data);
  };
  validate = () => {
    // e.preventDefault();
    console.log("done ND done");
    let data = this.state.data;
    const email = this.state.message;
    let password = this.state.password;
    //this.props.uid(email);
    data = data.filter(d => d.email === email);
    if ((data !== null) & (data[0].password === password)) {
      this.props.history.push("/main");
    }
  };
  render() {
    return (
      <ul className="flex-container">
        <div>
          <div className="box">
            <div>
              <img src="mozBlog.png" alt="mozBalog" />
            </div>
            <div>
              <Form>
                <div>
                  <input
                    onChange={e => this.setState({ fname: e.target.value })}
                    type="text"
                    id="fname"
                    name="Firstname"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    onChange={e => this.setState({ password: e.target.value })}
                    type="text"
                    id="password"
                    name="Password"
                    placeholder="Password"
                  />
                </div>

                <Button
                  onClick={() => this.validate()}
                  className="button-f"
                  value="L O G I N"
                />
              </Form>
              <label className="container">
                <b>
                  <a className="terms" href="/signup">
                    Forgot your password?
                  </a>
                </b>
              </label>
            </div>
          </div>
        </div>
        <div>
          Don't have an account?
          <b>
            <a
              className="terms"
              href="/signup"
              onClick={() => this.props.history.push("/signup")}
              target="_blank"
            >
              Get started
            </a>
          </b>
        </div>
      </ul>
    );
  }
}

export default Login;
