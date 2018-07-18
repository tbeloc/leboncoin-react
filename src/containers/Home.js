import React from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: false,
    offers: []
  };

  getOffers = () => {
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer")
      .then(response => {
        this.setState({
          isLoading: true,
          offers: response.data
        });
      });
  };

  render() {
    let listOffer = [];
    let count = 0;
    let classArticle = "";

    this.state.offers.forEach(offer => {
      if (count === 0) {
        classArticle = "containerOffer containerFirstOffer";
      } else {
        classArticle = "containerOffer";
      }

      listOffer.push(
        <Link className="cssOffer" to={"/offer/" + offer._id}>
          <article className={classArticle}>
            <div className="containerFoto" />
            <div className="containerDesc">
              <p>{offer.title}</p>
              <p className="pPrice">{offer.price}€</p>
            </div>
          </article>
        </Link>
      );
      count++;
    });

    return (
      <React.Fragment>
        <main>
          {listOffer}
          {/* <Link to="/offer/1">Annonce 1</Link> */}
        </main>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getOffers();
  }
}

export default Home;
