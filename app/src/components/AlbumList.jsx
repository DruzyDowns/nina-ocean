import React, { Component } from "react";
import axios from "axios";

let albumRequestUrl =
  "https://itunes.apple.com/search?term=frank+ocean&country=us&media=music&entity=album";

function AlbumTooltip({ children, tooltipTitle, tooltipDescription }) {
  const tipRef = React.createRef(null);
  function handleMouseEnter() {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginLeft = "20px";
  }
  function handleMouseLeave() {
    tipRef.current.style.opacity = 0;
    tipRef.current.style.marginLeft = "10px";
  }
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute w-56 whitespace-no-wrap bg-gradient-to-b from-white to-gray-100 text-black p-2 rounded flex flex-col justify-center transition-all duration-150"
        style={{ left: "100%", opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="bg-white h-3 w-3 absolute"
          style={{ left: "-6px", transform: "rotate(45deg)" }}
        />
        <h3 className="text-xl uppercase">{tooltipTitle} </h3>
        <p>{tooltipDescription}</p>
      </div>
      {children}
    </div>
  );
}

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
        <ul className="w-full flex justify-center">
          {this.state.filteredAlbums.map((album) => (
            <AlbumTooltip
              tooltipTitle={album.artistName}
              tooltipDescription={album.artistName}
              key={album.collectionId}
            >
              <li>
                <img src={album.artworkUrl100} alt="" />
                <h3>{album.collectionName}</h3>
              </li>
            </AlbumTooltip>
          ))}
        </ul>
      </main>
    );
  }
}

export default AlbumList;
