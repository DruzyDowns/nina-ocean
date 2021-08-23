import React, { Component } from "react";
import "./App.css";
import AlbumList from "./components/AlbumList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("album data");
  }

  render() {
    return (
      <div className="App relative">
        <div className="w-full flex justify-center">
          <h1 className="uppercase font-bold text-5xl">ocean</h1>
        </div>

        <AlbumList />
      </div>
    );
  }
}

export default App;
