import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFamousPerson } from '../actions/famousPersonActions';

class InputForm extends Component {
  state = {
    name: '',
    bio: ''
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSumbmitHandler = e => {
    e.preventDefault();
    const { name, bio } = this.state;
    const person = { name, bio };
    if (!name || !bio) {
      console.log('Empty do not submit');
    } else {
      this.props.addFamousPerson(person);
      this.setState({ name: '', bio: '' });
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
        <button
          type="submit"
          className="btn btn-success"
          style={{ width: '100%' }}
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
