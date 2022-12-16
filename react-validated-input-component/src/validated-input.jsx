import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    const value = event.target.value;
    this.setState({ password: value });
  }

  render() {
    let check;
    let statement;
    const pass = this.state.password;

    if (pass === '') {
      check = <i className="fa-solid fa-x"></i>;
      statement = <div> <p className='red'>A password is required.</p> </div>;
    } else if (pass.length < 8) {
      check = <i className="fa-solid fa-x"></i>;
      statement = <div> <p className='red'>Your password is too short.</p> </div>;
    } else if (pass.length >= 8) {
      check = <i className="fa-solid fa-check"></i>;
      statement = '';
    }
    return (

      <div>
        <form>
          <label name="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handlePassword} />
          {check}
          {statement}
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
