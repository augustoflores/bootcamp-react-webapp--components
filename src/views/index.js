import React, { Component } from 'react';

import Card from '../components/Card';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    };
  }

  onClick(index) {
    const list = this.state.list.map((pet, currentIndex) => {
      if (index === currentIndex) return { ...pet, adopt: true };
      return pet;
    })

    this.setState({ list });
  }

  async componentDidMount() {
    const response = await fetch('https://pets-api-agus-shiny-bilby.mybluemix.net/pets');

    const { payload } = await response.json();

    const list = payload.pets.map((pet) => {
      const {
        name: title,
        breed: subtitle,
        photo: img,
        isAdopted: adopt,
      } = pet;

      return {
        title,
        subtitle,
        img,
        adopt,
      };
    });

    this.setState({ list });
  }

  render() {
    const cards = this.state.list.map((petInfo, index) => (
      <div
        className="col-md-4"
        key={index}
      >
        <Card
          onClick={this.onClick.bind(this, index)}
          {...petInfo}
        />
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          { cards }
        </div>
      </div>
    )
  }
}

export default Index;
