import React, { Component } from "react";
import axios from "axios";
class GetRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "error in data Retriving" });
      });
  }
  render() {
    const { data, error } = this.state;
    return (
      <div>
        List of data
        {data.length
          ? data.map((data) => <h2 key={data.id}>{data.title}</h2>)
          : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default GetRequest;
