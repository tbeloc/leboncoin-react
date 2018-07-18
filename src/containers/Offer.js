import React from "react";
import axios from "axios";
import "./Offer.css";

class Offer extends React.Component {
  state = {
    isLoading: false,
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
          isLoading: true,
          offer: response.data
        });
      });
  };

  render() {
    console.log(this.state.offer);
    return (
      <React.Fragment>
        <div className="mainOffer">
          <div>
            <div>
              <div className="imgOffer" />
              <div className="descOffer">
                <p>{this.state.offer.title}</p>
                <p>{this.state.offer.price}€</p>
              </div>
            </div>
            <div>
              <p>Description</p>
              <p>{this.state.offer.description}</p>
            </div>
          </div>
          <div>
            <div>
              <div>{this.state.offer.creator.account.username}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getOffer();
  }
}

export default Offer;
