import React, { Component } from "react";
import styles from "./form.module.css";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      comment: "",
      topic: "vue",
    };
  }
  userHandler = (e) => {
    this.setState(
      {
        userName: e.target.value,
      },
      () => console.log("updated userName:", this.state.userName)
    );
  };
  passwordHandler = (e) => {
    this.setState(
      {
        password: e.target.value,
      },
      () => console.log("updated password", this.state.password)
    );
  };
  commentHandler = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  handleTopic = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };
  resetHandler = () => {
    this.setState({
      userName: "",
      password: "",
    });
  };
  handleSubmit = () => {
    alert(
      `userName: ${this.state.userName}, comment: ${this.state.comment}, topic: ${this.state.topic}`
    );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName: </label>
          <input
            type="text"
            onChange={this.userHandler}
            value={this.state.userName}
          />
        </div>
        <br />
        <div>
          <label>Comment</label>
          <textarea
            value={this.state.comment}
            onChange={this.commentHandler}
          ></textarea>
        </div>
        <br />
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
            <option value="java">Java</option>
            <option value="Nodejs">NodeJs</option>
          </select>
        </div>
        <div>
          <label>PassWord: </label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordHandler}
          />
        </div>
        <br />
        <div>
          <button type="submit" className={styles.btmSubmit}>
            Login
          </button>
          <button
            type="reset"
            className={styles.btmRest}
            onClick={this.resetHandler}
          >
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
