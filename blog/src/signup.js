import React, { Component } from "react";
// import "./App.css";
import "C:/learn/blog/blog/src/style.css";
import axios from "axios";

class Signup extends Component {
  state = {
    data: [],
    id: 0,
    fname: null,
    lname: null,
    desig: null,
    email: null,
    password: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
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
  };

  putDataToDB = () => {
    const email = this.state.email;
    const password = this.state.password;
    const desig = this.state.desig;
    const fname = this.state.fname;
    const lname = this.state.lname;
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    console.log(this.state.email, email, this.state.password, password);
    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      email: email,
      password: password,
      desig: desig,
      fname: fname,
      lname: lname
    });
    this.props.history.push("/main");
  };

  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };

  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3001/api/updateData", {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
  };
  render() {
    return (
      <ul class="flex-container">
        <div>
          <div class="box">
            <div>
              <img src="mozBlog.png" alt="" />
            </div>
            <div>
              <form>
                <input
                  onChange={e => this.setState({ fname: e.target.value })}
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="First Name"
                />
                <input
                  onChange={e => this.setState({ lname: e.target.value })}
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Last Name"
                />
                <input
                  onChange={e => this.setState({ desig: e.target.value })}
                  type="text"
                  id="desig"
                  name="designation"
                  placeholder="Designation"
                />
                <input
                  onChange={e => this.setState({ email: e.target.value })}
                  type="text"
                  id="email"
                  name="Email"
                  placeholder="Email Address"
                />
                <input
                  onChange={e => this.setState({ password: e.target.value })}
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <input
                  onChange={e =>
                    this.setState({ confpassword: e.target.value })
                  }
                  type="text"
                  id="confpassword"
                  name="confpassword"
                  placeholder="Confirm Password"
                />

                <input
                  onClick={() => this.putDataToDB()}
                  type="Submit"
                  value="S I G N  U P"
                />
              </form>
              <input type="checkbox" />
              <span class="checkmark" />
              <label class="container">
                {" "}
                I agree all statements in
                <b>
                  <a class="terms" href="/main" target="_blank">
                    terms of service
                  </a>
                </b>
              </label>
            </div>
          </div>
        </div>
        Already have an account?
        <b>
          <a class="terms" href="/login" target="_blank">
            Log in
          </a>
        </b>
      </ul>
    );
  }
}

export default Signup;
