import React, { Component, Fragment } from "react";
import List from "./components/List";
import { connect } from "react-redux";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    showModal: true
  };
  render() {
    console.log(this.props.selectedFamousPerson);
    return (
      <Fragment>
        <Header />
        <Modal />
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm">
              <div className="card">
                <div className="card-body">
                  <h1 className="mb-0">Input Form</h1>
                  <p className="text-muted mt-0">
                    Input the name of a Famous Person you want to add on the
                    List.
                  </p>
                  <hr />
                  <InputForm />
                </div>
              </div>
            </div>
            <div
              className="col-sm"
              style={{ height: "80vh", overflowY: "auto" }}
            >
              <div className="list-group">
                <h1 className="list-group-item list-group-item-action flex-column align-items-start active">
                  List Of Famous Persons
                </h1>
                <List />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedFamousPerson: state.famousPersonReducer.selectedFamousPerson
});

export default connect(mapStateToProps)(App);
