import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClickMe = this.handleClickMe.bind(this);
    this.handleThanksClick = this.handleThanksClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClickMe() {
    this.setState({ isClicked: true });
  }

  handleThanksClick() {
    this.setState({ isClicked: false });
  }

  render() {
    const state = this.state.isClicked;
    let button;
    if (state) {
      button = <button onClick={this.handleThanksClick}> Thanks!</button>;
    } else {
      button = <button onClick={this.handleClickMe}>Click Me!</button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }

}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
