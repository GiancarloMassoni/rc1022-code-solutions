import React from 'react';

let counter = 0;
class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { timesClicked: counter };
  }

  handleClick() {
    this.setState({ timesClicked: counter++ });
  }

  render() {

    let button;
    if (this.state.timesClicked <= 3) {
      button = <button onClick={this.handleClick} className="freezing">Hot Button</button>;
    } else if (this.state.timesClicked <= 6) {
      button = <button onClick={this.handleClick} className="cold">Hot Button</button>;
    } else if (this.state.timesClicked <= 9) {
      button = <button onClick={this.handleClick} className="warm">Hot Button</button>;
    } else if (this.state.timesClicked <= 12) {
      button = <button onClick={this.handleClick} className="warmer">Hot Button</button>;
    } else if (this.state.timesClicked <= 17) {
      button = <button onClick={this.handleClick} className="hot">Hot Button</button>;
    } else if (this.state.timesClicked >= 18) {
      button = <button onClick={this.handleClick} className="hottest">Hot Button</button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default HotButton;
