// import React from "react"
import React, { Component } from 'react';

class FlavorForm extends Component {
    constructor(props) {
      super(props);
      this.state = {muscle: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Todays workout is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            What workout do you want:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Chest">Chest</option>
              <option value="Back">Back</option>
              <option value="Legs">Legs</option>
              <option value="Biceps">Biceps</option>
              <option value="Triceps">Triceps</option>
              <option value="Fore-Arms">Fore-Arms</option>
              <option value="Shoulders">Shoulders</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default FlavorForm