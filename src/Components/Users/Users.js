import React, { Component } from 'react';
import User from '../User/User';
import './Users.css';

class Users extends Component {
  state = {
    users: [],
    user: [],
    loading: false,
    error: false,
  };

  getUsers = () => {
    const URL = 'http://uinames.com/api/?ext&amount=5';
    this.setState({ loading: true });
    fetch(URL)
      .then(res => res.json())
      .then(users => this.setState({ users, loading: false }))
      .catch(err => {
        this.setState({ loading: false, error: true });
      });
  };

  handleSingleUserData = user => {
    const userValue = user;
    const filteredData = this.state.users.find(user => user.name === userValue);
    this.setState({ user: filteredData });
  };

  handleUserData = () => {
    const { users, user } = this.state;
    return (
      <div className="container">
        <div className="users">
          {users.length
            ? users.map(({ name }, index) => (
                <ul key={index}>
                  <li>
                    <span onClick={event => this.handleSingleUserData(name)}>{name}</span>
                  </li>
                </ul>
              ))
            : null}
        </div>
        <div>{user ? <User user={this.state.user} /> : null}</div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="button">
          <button type="submit" onClick={this.getUsers}>
            Get Users!
          </button>
        </div>
        {this.handleUserData()}
      </div>
    );
  }
}

export default Users;
