import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: '', currSlide: -1, interval: '' };
    this.handleImg = this.handleImg.bind(this);
    this.mapDots = this.mapDots.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
  }

  handleImg() {
    const image = this.props.images[this.state.currSlide];
    if (this.state.currSlide === this.props.images.length - 1) {
      this.setState({ currSlide: 0 });
    } else if (this.state.currSlide !== this.props.images.length - 1) {
      this.setState({ image, currSlide: this.state.currSlide + 1 });
    }
  }

  mapDots(img, index) {
    if (index === this.state.currSlide) {
      return <i className="fa-solid fa-circle fa-2xl padding" key={index} onClick={event => this.changeSlide(event, index)}></i>;
    } else {
      return <i className="fa-regular fa-circle fa-2xl padding" key={index} onClick={event => this.changeSlide(event, index)}></i>;
    }
  }

  changeSlide(event, index) {
    clearInterval(this.state.interval);
    this.setState({ currSlide: index, interval: setInterval(this.handleImg, 3000) });
    if (index) {
      return <i className="fa-solid fa-circle fa-2xl padding" key={index} onClick={event => this.changeSlide(event, index)}></i>;
    } else {
      return <i className="fa-regular fa-circle fa-2xl padding" key={index} onClick={event => this.changeSlide(event, index)}></i>;
    }
  }

  handleRight() {
    clearInterval(this.state.interval);
    if (this.state.currSlide === this.props.images.length - 1) {
      this.setState({ currSlide: 0, interval: setInterval(this.handleImg, 3000) });
    } else {
      this.setState({ currSlide: this.state.currSlide + 1, interval: setInterval(this.handleImg, 3000) });
    }
  }

  handleLeft() {
    clearInterval(this.state.interval);
    if (this.state.currSlide === 0) {
      this.setState({ currSlide: this.props.images.length - 1, interval: setInterval(this.handleImg, 3000) });
    } else {
      this.setState({ currSlide: this.state.currSlide - 1, interval: setInterval(this.handleImg, 3000) });
    }
  }

  render() {
    const image = this.props.images[this.state.currSlide];
    const dots = this.props.images.map(this.mapDots);

    if (this.state.image === '') {
      this.setState({ image, currSlide: this.state.currSlide + 1 });
      this.setState({ interval: setInterval(this.handleImg, 3000) });
    }
    return (
      <div className='container'>
        <div className='row align-center justify-center'>
          <div className='col-one-sixth'>
            <i className="fa-sharp fa-solid fa-chevron-left fa-2xl" onClick={this.handleLeft}></i>
          </div>
          <div className='col-four-sixth'>
            <img src={image}></img>
          </div>
          <div className='col-one-sixth text-right'></div>
          <i className="fa-sharp fa-solid fa-chevron-right fa-2xl" onClick={this.handleRight}></i>
        </div>
        <div className='row text-center'>
          <div className='col-full'>
            {dots}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
