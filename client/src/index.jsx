import React from "react";
import ReactDOM from "react-dom";
import homepage from "./components/homepage.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <homepage />;
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
