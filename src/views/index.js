import React, { Component } from 'react';

import Card from '../components/Card';
import PetForm from '../components/PetForm';
import CustomButton from '../components/CustomButton';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    };
  }

  async onClick(id) {
    const response = await fetch(`http://localhost:8080/pets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isAdopted: true }),
    });

    const { success } = await response.json();

    if (success) this.fetchData();
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const response = await fetch('http://localhost:8080/pets');

    const { payload } = await response.json();

    const list = payload.pets.map((pet) => {
      const {
        name: title,
        breed: subtitle,
        photo: img,
        isAdopted: adopt,
        _id: id,
      } = pet;

      return {
        title,
        subtitle,
        img,
        adopt,
        id,
      };
    });

    this.setState({ list });
  }

  render() {
    const cards = this.state.list.map((petInfo) => (
      <div
        className="col-md-4"
        key={petInfo.id}
      >
        <Card {...petInfo}>
          { !petInfo.adopt
              ?
                <CustomButton
                  onClick={this.onClick.bind(this, petInfo.id)}
                  text="Adoptar"
                  className="is-success"
                />
              :
                'Ya esta adoptado'
          }
        </Card>
      </div>
    ));

    return (
      <div className="container">
        <PetForm onSuccess={this.fetchData.bind(this)} />
        <div className="row">
          { cards }
        </div>
      </div>
    )
  }
}

export default Index;
