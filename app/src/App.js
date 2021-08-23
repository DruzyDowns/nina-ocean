import React, { Component } from "react";
import "./App.css";
import AlbumList from "./components/AlbumList";
import TitleMarquee from "./components/TitleMarquee";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App relative ebb overflow-hidden">
        <div className="marquee">
          <TitleMarquee />
        </div>

        <AlbumList />
      </div>
    );
  }
}

export default App;
