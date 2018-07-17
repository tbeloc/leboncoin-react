import React from "react";
import { NavLink, withRouter } from "react-router-dom";

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
          <li>
            <NavLink to={"/profile/" + this.props.user._id}>
              {this.props.user.username}
            </NavLink>
          </li>
          <li>
            <button onClick={this.onLogOut}>Déconnexion</button>
          </li>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <li>
          <NavLink to="/sign_up">Créer un compte</NavLink>
        </li>
        <li>
          <NavLink to="/log_in">Se connecter</NavLink>
        </li>
      </React.Fragment>
    );
  }
  render() {
    return (
      <header>
        <h1>leboncoin</h1>
        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {this.renderNav()}
        </ul>
        <hr />
      </header>
    );
  }
}

export default withRouter(Header);
