import React, { Component } from "react";
import axios from "axios";
import Name from "./Component/Name";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        this.setState({ data: res.data.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Hai semua</h1>
        {this.state.data.map((item) => (
          <Name data={item} />
        ))}
      </div>
    );
  }
}

export default App;
