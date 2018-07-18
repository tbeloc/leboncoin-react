import React from "react";
import axios from "axios";

class Publish extends React.Component {
  state = {
    title: "",
    description: "",
    price: ""
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
      .post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        {
          title: this.state.title,
          description: this.state.description,
          price: this.state.price
        },
        // { headers: { Authorization: "bearer " + "B2cVjhZdgyUgKcqI" } }
        { headers: { Authorization: "bearer " + this.props.user.token } }
      )
      .then(response => {
        console.log(response.data);
        //   {
        //     "_id": "5b4efc875b53670014c1633c",
        //     "title": "Poupée gonflable",
        //     "description": "Toute neuve",
        //     "price": 1750,
        //     "created": "2018-07-18T08:38:31.642Z",
        //     "creator": {
        //         "account": {
        //             "username": "trouduc"
        //         },
        //         "_id": "5b4deacff248b2001456a08a"
        //     }
        // }

        if (response.data && response.data._id) {
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
      <div className="containerAnnonce">
        <div>
          <h2>Votre annonce</h2>
        </div>
        <div>
          <form onSubmit={this.onSubmit} className="form form-signup">
            <div>
              <label htmlFor="title">Titre de l'annonce</label>
              <input
                id="title"
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <label htmlFor="description">Texte de l'annonce</label>
              <input
                id="description"
                name="description"
                type="texte"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <label htmlFor="price">Prix de l'annonce</label>
              <input
                id="price"
                name="price"
                type="text"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" value="Valider" />
          </form>
        </div>
      </div>
    );
  }
}

export default Publish;
