import React, { Component } from "react";

class ErrorBounday extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  componentDidCatch(erro, info) {
    console.log(erro);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>some thing went wrong</h1>;
    } else return this.props.children;
  }
}

export default ErrorBounday;
