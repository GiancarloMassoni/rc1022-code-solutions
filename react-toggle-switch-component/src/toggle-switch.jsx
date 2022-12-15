import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }

  }

  render() {
    let button;
    let label;
    if (this.state.isClicked === true) {
      label = <label>On</label>;
      button = <input type="checkbox" onClick={this.handleClick} className="on" />;
    } else {
      label = <label>Off</label>;
      button = <input type="checkbox" onClick={this.handleClick} className="off" />;
    }

    return (
      <div>
        {button}
        {label}
      </div>
    );
  }
}

export default ToggleSwitch;
