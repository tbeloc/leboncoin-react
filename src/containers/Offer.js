import React from "react";
import axios from "axios";
import "./Offer.css";

class Offer extends React.Component {
  state = {
    isLoading: true,
    offer: {}
  };

  getOffer = () => {
    axios
      .get(
        "https://leboncoin-api.herokuapp.com/api/offer/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          isLoading: false,
          offer: response.data
        });
      });
  };

  render() {
    console.log(this.state.offer);
    if (!this.state.isLoading) {
      return (
        <React.Fragment>
          <div className="mainOffer">
            <div>
              <div className="containImgDesc">
                <div className="imgOffer" />
                <div className="descOffer">
                  <p className="titleOffer">{this.state.offer.title}</p>
                  <p className="priceOffer">{this.state.offer.price}€</p>
                </div>
              </div>
              <div>
                <p>Description</p>
                <p>{this.state.offer.description}</p>
              </div>
            </div>
            <div className="userContainer">
              <div className="userContainContainer">
                <div className="txtContainer">
                  <div className="imgAvatar">
                    <i class="fas fa-user" />
                  </div>
                  {this.state.offer.creator.account.username}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <div />;
    }
  }

  componentDidMount() {
    this.getOffer();
  }
}

export default Offer;
