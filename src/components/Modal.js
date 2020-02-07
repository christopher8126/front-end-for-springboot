import React, { Component } from "react";
import "./Modal.css";
import { connect } from "react-redux";
import {
  emptySelected,
  updateFamousPerson
} from "../actions/famousPersonActions";
class Modal extends Component {
  state = {
    name: "",
    bio: "",
    date: ""
  };

  onUpdateSubmit;

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const id = this.props.selectedFamousPerson.id;
    const { name, bio, date } = this.state;
    this.props.updateFamousPerson({ id, name, bio, date });
  };

  render() {
    console.log(this.props.selectedFamousPerson);
    return (
      <div
        className="modal-bg"
        style={{
          transform: this.props.selectedFamousPerson
            ? "translateY(0)"
            : "translateY(-100)",
          opacity: this.props.selectedFamousPerson ? "1" : "0"
        }}
      >
        <div className="card border-success mb-3" style={{ maxWidth: "20rem" }}>
          <div className="card-header d-flex justify-content-between">
            <p>Update Famous Person Info</p>
            <i
              class="material-icons"
              onClick={this.props.emptySelected}
              style={{ cursor: "pointer" }}
            >
              close
            </i>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="name">Name of Famous Person</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeHandler}
                  placeholder={
                    this.props.selectedFamousPerson
                      ? this.props.selectedFamousPerson.name
                      : ""
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio of Famous Person</label>
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChangeHandler}
                  placeholder={
                    this.props.selectedFamousPerson
                      ? this.props.selectedFamousPerson.bio
                      : ""
                  }
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
                  placeholder={
                    this.props.selectedFamousPerson
                      ? this.props.selectedFamousPerson.date
                      : ""
                  }
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  famousPerson: state.famousPersonReducer.famousPersons,
  selectedFamousPerson: state.famousPersonReducer.selectedFamousPerson
});

export default connect(mapStateToProps, { emptySelected, updateFamousPerson })(
  Modal
);
