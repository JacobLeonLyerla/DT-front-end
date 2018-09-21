import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from "../assets/logoinit.png"

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={logo}/>
        </Menu.Item>


        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>
        <Menu.Item
          name='visit'
          active={activeItem === 'visit'}
          onClick={this.handleItemClick}
        >
          Visit
        </Menu.Item>

        <Menu.Item
          name='destinations'
          active={activeItem === 'destinations'}
          onClick={this.handleItemClick}
        >
          Destinations
        </Menu.Item>

        <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          Sign-in
        </Menu.Item>
      </Menu>
    )
  }
}