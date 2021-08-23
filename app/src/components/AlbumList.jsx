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
        <ul className="w-full grid gap-4 grid-cols-1 lg:grid-cols-2">
          {this.state.filteredAlbums.map((album) => (
            <li
              key={album.collectionId}
              className="group w-full relative transform hover:ebb hover:-translate-y-1 flex rounded-lg shadow-md transition-all"
            >
              <img
                className=" rounded-l-lg "
                src={album.artworkUrl100}
                alt=""
              />
              <div className="p-2 bg-white w-full rounded-r-lg group-hover:glow">
                <h3>{album.artistName}</h3>
                <h3>{album.collectionName}</h3>
                <h3>
                  {new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "long",
                  }).format(new Date(album.releaseDate))}
                </h3>
                <a href={album.collectionViewUrl}>View Album on iTunes</a>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default AlbumList;
