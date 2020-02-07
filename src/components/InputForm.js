import React, { Component } from "react";
import { connect } from "react-redux";

import { addFamousPerson } from "../actions/famousPersonActions";

class InputForm extends Component {
  state = {
    name: "",
    bio: "",
    date: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSumbmitHandler = e => {
    e.preventDefault();
    const { name, bio, date } = this.state;
    const person = { name, bio, date };
    if (!name || !bio) {
      console.log("Empty do not submit");
    } else {
      this.props.addFamousPerson(person);
      this.setState({ name: "", bio: "", date: "" });
    }
  };

  render() {
    // console.log(this.props.famousPersons);
    return (
      <form onSubmit={this.onSumbmitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name of Famous Person</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            onChange={this.onChangeHandler}
            placeholder="Enter the Name of Famous Persons"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio of Famous Person</label>
          <input
            type="text"
            className="form-control"
            name="bio"
            onChange={this.onChangeHandler}
            value={this.state.bio}
            placeholder="Enter the Bio of Famous Persons"
          />
        </div>
        <div class="form-group">
          <label htmlFor="dateField">
            Date<span className="text-muted">(mm/dd/yyyy)</span>
          </label>
          <input
            class="form-control"
            type="date"
            id="dateField"
            name="date"
            value={this.state.date}
            onChange={this.onChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          style={{ width: "100%" }}
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  famousPersons: state.famousPersonReducer.famousPersons
});

export default connect(mapStateToProps, { addFamousPerson })(InputForm);
