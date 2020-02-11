import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const INITIAL_STATE = {
    name: "",
    image: "",
    anmial_type: "",
    age: "",
   owner_id: ""
  };

class PetForm extends React.Component {
    state = INITIAL_STATE;

    handleChange = e => {
          this.setState({ [e.target.name]: e.target.value })
      };

      handleFormSubmit = e => {
        e.preventDefault();
        this.props.addPet(this.state);
        this.setState(INITIAL_STATE);
      };



  render() {
    return(
      <>
      
      <form className="ui form" onSubmit={this.handleFormSubmit}>
      <div className="field">
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
      </div>
      <div className="field">
        <label>Profile Image</label>
        <input type="text" name="image" value={this.state.image} onChange={this.handleChange} placeholder="Image" />
      </div>
      <div className="field">
        <label>Anmial Type</label>
        <input type="text" name="anmial_type" value={this.state.anmial_type} onChange={this.handleChange} placeholder="Animal Type" />
      </div>
      <div className="field">
        <label>Age</label>
        <input type="text" name="age" value={this.state.age} onChange={this.handleChange} placeholder="age" />
      </div>
      <div className="field">
        <label>Owner Id</label>
        <input type="text" name="owner_id" value={this.state.owner_id} onChange={this.handleChange} placeholder="owner_id" />
      </div>
      <button type="submit" className="ui button">Submit</button>
    </form>
    </>
    )
  }
}

export default PetForm