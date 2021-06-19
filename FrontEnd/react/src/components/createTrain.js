import React, { Component } from "react";
import trainService from "../services/trainService";
import UserService from "../services/user.service";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

export default class createTrain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
    this.state = {
      trainNumber: "",
      trainName: "",
      trainOrigin: "",
      trainDestination: "",
      date: "",
      time: "",
      acFare: "",
      sleeperFare: "",
      ac: "",
      sleeper: "",
    };
    this.changetrainNumberHandler = this.changetrainNumberHandler.bind(this);
    this.changetrainNameHandler = this.changetrainNameHandler.bind(this);
    this.changetrainOriginHandler = this.changetrainOriginHandler.bind(this);
    this.changetrainDestinationHandler =
      this.changetrainDestinationHandler.bind(this);
    this.changedateHandler = this.changedateHandler.bind(this);
    this.changetimeHandler = this.changetimeHandler.bind(this);
    this.changeacFareHandler = this.changeacFareHandler.bind(this);
    this.changesleeperFareHandler = this.changesleeperFareHandler.bind(this);
    this.changeacHandler = this.changeacHandler.bind(this);
    this.changesleeperHandler = this.changesleeperHandler.bind(this);
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  savetrain = (e) => {
    e.preventDefault();
    let traindata = {
      trainNumber: this.state.trainNumber,
      trainName: this.state.trainName,
      trainOrigin: this.state.trainOrigin,
      trainDestination: this.state.trainDestination,
      date: this.state.date,
      time: this.state.time,
      trainFares: {
        acFare: this.state.acFare,
        sleeperFare: this.state.sleeperFare,
      },
      trainTiers: {
        ac: this.state.ac,
        sleeper: this.state.sleeper,
      },
    };

    console.log("traindata => " + JSON.stringify(traindata));

    trainService.addTrain(traindata).then((res) => {});
    this.props.history.push("/admin");
    alert("train successfully added with train name: " + this.state.trainName);
  };

  cancel() {
    this.props.history.push("/admin");
    alert("cancelled adding train... redirecting to admin page");
  }

  changetrainNumberHandler = (event) => {
    this.setState({ trainNumber: event.target.value });
  };
  changetrainNameHandler = (event) => {
    this.setState({ trainName: event.target.value });
  };
  changetrainOriginHandler = (event) => {
    this.setState({ trainOrigin: event.target.value });
  };
  changetrainDestinationHandler = (event) => {
    this.setState({ trainDestination: event.target.value });
  };

  changedateHandler = (event) => {
    this.setState({ date: event.target.value });
  };
  changetimeHandler = (event) => {
    this.setState({ time: event.target.value });
  };

  changeacFareHandler = (event) => {
    this.setState({ acFare: event.target.value });
  };
  changesleeperFareHandler = (event) => {
    this.setState({ sleeperFare: event.target.value });
  };
  changeacHandler = (event) => {
    this.setState({ ac: event.target.value });
  };
  changesleeperHandler = (event) => {
    this.setState({ sleeper: event.target.value });
  };

  render() {
    if (this.state.content === "Admin Board.") {
      return (
        <div
          style={{
            color: "white",
            background: "black",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark">
                <h3 className="text-center"> add Train</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <lable>Train number</lable>
                      <input
                        type="number"
                        placeholder="trainNumber"
                        name="trainNumber"
                        className="form-control"
                        value={this.state.trainNumber}
                        onChange={this.changetrainNumberHandler}
                      />

                      <lable>Train name</lable>
                      <input
                        required
                        placeholder="trainName"
                        name="trainName"
                        className="form-control"
                        value={this.state.trainName}
                        onChange={this.changetrainNameHandler}
                      />

                      <lable>Train origin</lable>
                      <input
                        placeholder="trainOrigin"
                        name="trainOrigin"
                        className="form-control"
                        value={this.state.trainOrigin}
                        onChange={this.changetrainOriginHandler}
                        required
                      />

                      <lable>Train destination</lable>
                      <input
                        placeholder="trainDestination"
                        name="trainDestination"
                        className="form-control"
                        value={this.state.trainDestination}
                        onChange={this.changetrainDestinationHandler}
                        required
                      />

                      <lable>date of journey</lable>
                      <input
                        type="date"
                        placeholder="DD-MM-YYYY"
                        name="date"
                        className="form-control"
                        value={this.state.date}
                        onChange={this.changedateHandler}
                        required
                      />

                      <lable>time</lable>
                      <input
                        type="time"
                        placeholder="HH:MM"
                        name="time"
                        className="form-control"
                        value={this.state.time}
                        onChange={this.changetimeHandler}
                        required
                      />

                      <lable>price of ac tier</lable>
                      <input
                        type="number"
                        placeholder="acFare"
                        name="acFare"
                        className="form-control"
                        value={this.state.acFare}
                        onChange={this.changeacFareHandler}
                        required
                      />
                      <lable>price of sleeper tier</lable>
                      <input
                        type="number"
                        placeholder="sleeperFare"
                        name="sleeperFare"
                        className="form-control"
                        value={this.state.sleeperFare}
                        onChange={this.changesleeperFareHandler}
                        required
                      />

                      <lable>seats in ac tier</lable>
                      <input
                        type="number"
                        placeholder="ac"
                        name="ac"
                        className="form-control"
                        value={this.state.ac}
                        onChange={this.changeacHandler}
                        required
                      />
                      <lable>seats in sleeper tier</lable>
                      <input
                        type="number"
                        placeholder="sleeper"
                        name="sleeper"
                        className="form-control"
                        value={this.state.sleeper}
                        onChange={this.changesleeperHandler}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={this.savetrain}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px", paddingTop: "10px" }}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>unauthorized</h1>
        </div>
      );
    }
  }
}
