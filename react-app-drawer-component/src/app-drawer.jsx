import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.handleModal = this.handleModal.bind(this);
    this.handleClickedList = this.handleClickedList.bind(this);
  }

  handleModal() {
    this.setState({ modalOpen: true });
  }

  handleClickedList() {
    this.setState({ modalOpen: false });
  }

  render() {
    let bars = <i className="fa-solid fa-bars positioned" onClick={this.handleModal}></i>;
    let overlay = <div className='positioned overlay hidden'></div>;
    let list = <div className="modal positioned hidden" onClick={this.handleClickedList}>
      <ul>
        <li className="title">Choose a MOBA</li>
        <li><a href='#'>Dota 2</a></li>
        <li><a href='#'>League of Legends</a></li>
        <li><a href='#'>Smite</a></li>
        <li><a href='#'>Dota 1</a></li>
      </ul>
    </div>;
    if (this.state.modalOpen === true) {
      bars = '';
      overlay = <div className='positioned overlay' onClick={this.handleClickedList}></div>;
      list = <div className="modal positioned" onClick={this.handleClickedList}>
        <ul>
          <li className="title">Choose a MOBA</li>
          <li><a href='#'>Dota 2</a></li>
          <li><a href='#'>League of Legends</a></li>
          <li><a href='#'>Smite</a></li>
          <li><a href='#'>Dota 1</a></li>
        </ul>
      </div >;
    }

    return (

      <div>
        {overlay}
        {bars}
        {list}
      </div>
    );
  }
}

export default AppDrawer;
