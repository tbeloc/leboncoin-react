import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Headers.css";

class Header extends React.Component {
  onLogOut = event => {
    this.props.logOut();
    this.props.history.push("/");
  };
  //Pourquoi ?
  renderNav() {
    if (this.props.user._id) {
      return (
        <React.Fragment>
          <div className="button buttonFirst">
            <NavLink to={"/profile/" + this.props.user._id}>
              {this.props.user.username}
            </NavLink>
          </div>
          <div className="button">
            <a onClick={this.onLogOut}>Déconnexion</a>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className="button buttonFirst">
          <NavLink to="/sign_up">Créer un compte</NavLink>
        </div>
        <div className="button">
          <NavLink to="/log_in">Se connecter</NavLink>
        </div>
      </React.Fragment>
    );
  }
  render() {
    return (
      <header>
        <NavLink to="/">
          <img src="https://static.leboncoin.fr/img/logo.svg" />
        </NavLink>
        <div className="menu">{this.renderNav()}</div>
      </header>
    );
  }
}

export default withRouter(Header);
