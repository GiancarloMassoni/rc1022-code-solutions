import React from 'react';
class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearCounter = this.clearCounter.bind(this);
    this.state = { time: 0, clicked: false, intervalId: 0 };
  }

  handleTimer() {

    if (this.state.time === 5) {
      this.setState({ clicked: false });
      this.setState({ time: 0 });
      clearInterval(this.state.intervalId);
    } else if (this.state.time === 0) {
      this.setState({ intervalId: setInterval(this.handleTimer, 1000) });
      this.setState({ time: this.state.time + 1 });
    } else if (this.state.time < 5) {
      this.setState({ time: this.state.time + 1 });
    }
  }

  handleClick() {
    if (this.state.time === 5 && this.state.clicked === true) {
      this.setState({ clicked: false });
    } else if (this.state.clicked === false && this.state.time === 0) {
      this.setState({ clicked: true });
      this.handleTimer();
    } else if (this.state.clicked === true) {
      clearInterval(this.state.intervalId);
      this.setState({ clicked: false });
    }

  }

  clearCounter() {
    if (this.state.clicked === false) {
      this.setState({ time: 0 });
    }
  }

  render() {
    let playPause;
    const time = this.state.time;

    if (this.state.clicked === false) {
      playPause = <i className="fa-solid fa-play" onClick={this.handleClick}></i>;
    } else if (this.state.clicked === true) {
      playPause = <i className="fa-solid fa-pause" onClick={this.handleClick}></i>;
    }
    if (time === 5) {
      playPause = <i className="fa-solid fa-pause" onClick={this.handleClick}></i>;
    }

    return (
      <div className='div'>
        <i className="fa-light fa-circle" onClick={this.clearCounter}>

          <p>{time}</p>
        </i>
        {playPause}
      </div>

    );
  }

}

export default StopWatch;
