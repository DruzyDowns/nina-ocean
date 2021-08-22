import React from "react";
import axios from "axios";
let url =
  "https://itunes.apple.com/search?term=frank+ocean&country=us&media=music&entity=album";

export default class AlbumList extends React.Component {
  state = {
    filteredAlbums: [],
  };

  componentDidMount() {
    axios.get(url).then((res) => {
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
      <ul>
        {this.state.filteredAlbums.map((album) => (
          <li key={album.collectionId}>
            {album.collectionName}
            <img src={album.artworkUrl100} alt="" />
          </li>
        ))}
      </ul>
    );
  }
}

//collectionName
