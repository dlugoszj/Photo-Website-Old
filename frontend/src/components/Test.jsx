import React, { Component } from "react";


class Myloop extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfImages: [] };
  }
  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    const list = this.importAll(
      require.context("../assets/images/California", false, /\.(png|jpe?g|heic)$/)
    );
    this.setState({
      listOfImages: list
    });
  }

  render() {
    return (
      <>
        <ul>
          <li>
            {this.state.listOfImages.map((image, index) => (
              <img src={image} key={index} alt="info"></img>
            ))}
          </li>
        </ul>
      </>
    );
  }
}

export default MyLoop;