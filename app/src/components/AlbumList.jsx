import React, { Component } from "react";
import axios from "axios";
let albumRequestUrl =
  "https://itunes.apple.com/search?term=frank+ocean&country=us&media=music&entity=album";

class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      filteredAlbums: [],
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    //make the request and set the component state
    axios.get(albumRequestUrl).then((res) => {
      const albums = res.data;
      let filteredAlbums = albums.results.filter((album) =>
        album.artistName.includes("Frank Ocean")
      );
      console.log(filteredAlbums);
      this.setState({ filteredAlbums });
    });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <ul>
          {this.state.filteredAlbums.map((album) => (
            <li key={album.collectionId} onClick={this.showModal}>
              <img src={album.artworkUrl100} alt="" />
              <p>{album.artistName}</p>
              <p>{album.collectionName}</p>
              <p>{album.releaseDate}</p>
              <p>{album.trackCount > 1 ? album.trackCount : "single"}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default AlbumList;
