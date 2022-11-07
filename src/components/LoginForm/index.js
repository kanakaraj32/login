import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {user: '', password: ''}

  user = event => {
    this.setState({user: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  submit = async event => {
    event.preventDefault()
    const {user, password} = this.state
    const detail = {user, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(detail),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, option)
    const data = response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt=" website login"
          className="imagelogo"
        />
        <form className="container1" onSubmit={this.submit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />

          <div className="user">
            <label htmlFor="password">UserName</label>
            <input
              type="text"
              className="password"
              id="password"
              onChange={this.user}
            />
          </div>

          <div className="user">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              className="password"
              id="pass"
              onChange={this.password}
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default Login
