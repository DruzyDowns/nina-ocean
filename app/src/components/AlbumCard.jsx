import React, { Component } from "react";

const AlbumModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "block" : "hidden";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

class AlbumCard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      filteredAlbums: [],
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {}

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <AlbumModal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </AlbumModal>
        <img src="./components/blond.jpeg" alt="" />
        <p onClick={this.showModal}>album.artistName</p>
        <p>album.collectionName</p>
        <p>album.releaseDate</p>
        <p>album.trackCount > 1 ? album.trackCount : "single"</p>
      </div>
    );
  }
}

export default AlbumCard;
