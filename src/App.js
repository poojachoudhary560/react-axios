import React, { Component, Fragment } from "react";
import UserForm from "./components/UserForm";
import axios from "axios";
import "./App.css";
//https://api.github.com/users/john
class App extends Component {
  state = {
    repos: null
  };
  getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    console.log(user + "aba");
    if (user) {
      axios.get(`https://api.github.com/users/${user}`).then(res => {
        console.log(res);
        const repos = res.data.public_repos;
        const username = res.data.login;
        const name = res.data.name;
        const public_repos = res.data.public_repos;
        const followers = res.data.followers;
        const following = res.data.following;
        const url = res.data.url;
        //console.log(repos);
        this.setState({
          repos,
          username,
          name,
          public_repos,
          followers,
          following,
          url
        });
      });
    } else return;
  };
  render() {
    return (
      <div className="conatiner-fluid">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Github UserFetch App</h1>
          </header>
          <UserForm getUser={this.getUser} />
          {this.state.repos ? (
            <Fragment>
              <div className="App-table">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Username</td>
                      <td>{this.state.username}</td>
                    </tr>
                    <tr>
                      <td>Url</td>
                      <td>{this.state.url}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>{this.state.name}</td>
                    </tr>
                    <tr>
                      <td>Public Repos</td>
                      <td>{this.state.public_repos}</td>
                    </tr>
                    <tr>
                      <td>Followers</td>
                      <td>{this.state.followers}</td>
                    </tr>
                    <tr>
                      <td>Following</td>
                      <td>{this.state.followers}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fragment>
          ) : (
            <p> Please enter a username</p>
          )}
        </div>
      </div>
    );
  }
}
export default App;
