import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getFamousPersons,
  selectSingleFamousPerson,
  deleteFamousPerson
} from "../actions/famousPersonActions";

class List extends Component {
  onClickHandler = id => {
    this.props.selectSingleFamousPerson(id);
  };

  deleteClickHandler = id => {
    this.props.deleteFamousPerson(id);
  };

  componentDidMount() {
    this.props.getFamousPersons();
  }
  render() {
    const { famousPerson } = this.props;
    console.log(famousPerson);
    return (
      <Fragment>
        {famousPerson.length > 0 ? (
          famousPerson.map(fPerson => {
            return (
              <div
                key={fPerson.id}
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <div>
                    <p className="mb-1">
                      <span className="text-muted">Name : </span>
                      {fPerson.name}
                    </p>
                    <p className="mb-1">
                      <span className="text-muted">Bio : </span>
                      {fPerson.bio}
                    </p>
                    <p className="mb-1">
                      <span className="text-muted">Date of Birth : </span>
                      {fPerson.date}
                    </p>
                  </div>
                  <div>
                    <span
                      className="badge badge-pill badge-warning"
                      style={{ marginRight: "4px", cursor: "pointer" }}
                      onClick={() => this.onClickHandler(fPerson.id)}
                    >
                      Edit
                    </span>
                    <span
                      className="badge badge-pill badge-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.deleteClickHandler(fPerson.id)}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>The List is Empty</p>
        )}
      </Fragment>
    );
  }
}

List.propTypes = {
  famousPerson: PropTypes.array.isRequired,
  getFamousPersons: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  famousPerson: state.famousPersonReducer.famousPersons
});

export default connect(mapStateToProps, {
  getFamousPersons,
  selectSingleFamousPerson,
  deleteFamousPerson
})(List);
