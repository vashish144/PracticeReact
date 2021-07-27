import React, { Component } from "react";
import axios from "axios";

export class PostRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="">userId:</label>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={this.changeHandler}
        />
        <br />
        <label htmlFor="">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.changeHandler}
        />
        <br />
        <label htmlFor="">body:</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={this.changeHandler}
        />
        <button>submit</button>
      </form>
    );
  }
}

export default PostRequest;
