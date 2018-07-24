// ignore-prettier
import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

const PASSWORD = 'boblam.ceo'

class PasswordChecker extends Component {
  state = {
    password: '',
    isAuthenticated: false,
  }
  onPasswordChange = e => {
    const password = e.target.value
    this.setState({
      password,
    })
  }

  checkPassword = () => {
    const isAuthenticated = this.state.password === PASSWORD
    this.setState({
      isAuthenticated
    })
  }

  render() {
    const { isAuthenticated } = this.state

    if (!isAuthenticated) {
      return (
        <div>
          <Input
            type="password"
            onChange={this.onPasswordChange}
            placeholder="password for write.js"
          />
          <button onClick={this.checkPassword}>enter</button>
        </div>
      )
    }

    return this.props.children
  }
}

export default PasswordChecker
