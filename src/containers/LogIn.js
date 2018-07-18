import React from "react";
import axios from "axios";
import "./LogIn.css";

class LogIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response.data);
        // {
        //   account: { username: "Farid" },
        //   token: "Ii0HYfXTN7L2SMoL",
        //   _id: "5b4ceb668c2a9a001440b2fb"
        // };

        if (response.data && response.data.token) {
          this.props.setUser({
            token: response.data.token,
            username: response.data.account.username,
            _id: response.data._id
          });

          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  };

  render() {
    return (
      <main>
        <div className="middle">
          <div className="connexion">Connexion</div>
          <form onSubmit={this.onSubmit} className="form form-signup">
            {/* <label htmlFor="email" />
            <input
              id="email"
              name="email"
              type="text"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="email" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            /> */}

            <div className="test">
              <label htmlFor="email" class="inp">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="&nbsp;"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <span class="label">Courriel</span>
                <svg width="120px" height="26px" viewBox="0 0 120 26">
                  <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25" />
                </svg>
                <span class="border" />
              </label>
            </div>
            <br />

            <div className="test">
              <label htmlFor="password" class="inp">
                <input
                  placeholder="&nbsp;"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="&nbsp;"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <span class="label">Mot de passe</span>
                <svg width="120px" height="26px" viewBox="0 0 120 26">
                  <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25" />
                </svg>
                <span class="border" />
              </label>
            </div>

            <input className="submit" type="submit" value="Se connecter" />
          </form>
        </div>
      </main>
    );
  }
}

export default LogIn;
