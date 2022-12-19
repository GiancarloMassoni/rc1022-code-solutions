import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drop: '', current: '' };
    this.handleDropDown = this.handleDropDown.bind(this);
    this.itemList = this.itemList.bind(this);
    this.handleItemsClicked = this.handleItemsClicked.bind(this);
  }

  handleDropDown(e) {
    const key = e.target.textContent;
    this.setState({ current: this.state.drop });
    this.setState({ drop: key });
  }

  handleItemsClicked(item) {
    if (this.state.drop !== '' && this.state.current === item.title) {
      this.setState({ drop: '' });
      return <div key={item.title}> <h2 onClick={this.handleDropDown}>{item.title}</h2> <p className='hidden'>{item.content}</p> </div>;
    }
    if (item.title === this.state.drop) {
      return <div key={item.title}> <h2 onClick={this.handleDropDown}>{item.title}</h2> <p className=''>{item.content}</p> </div>;
    } else {
      return <div key={item.title}> <h2 onClick={this.handleDropDown}>{item.title}</h2> <p className='hidden'>{item.content}</p> </div>;
    }

  }

  itemList(props) {
    if (this.state.drop === '') {
      const items = this.props.content.map(item =>
        <div key={item.title}> <h2 onClick={this.handleDropDown}>{item.title}</h2> <p className='hidden'>{item.content}</p> </div>);
      return items;
    } else {
      return this.props.content.map(this.handleItemsClicked);

    }
  }

  render(props) {
    return (
      this.itemList()
    );
  }
}

export default Accordion;
