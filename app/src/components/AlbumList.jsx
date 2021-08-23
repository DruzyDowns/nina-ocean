import React, { Component } from "react";
import axios from "axios";
let albumRequestUrl =
  "https://itunes.apple.com/search?term=frank+ocean&country=us&media=music&entity=album";

class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      filteredAlbums: [],
    };
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

  render() {
    return (
      <main>
        <ul>
          {this.state.filteredAlbums.map((album) => (
            <li key={album.collectionId}>
              <img src={album.artworkUrl100} alt="" onClick={this.showModal} />
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
