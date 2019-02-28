import React, { PureComponent } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout
class Head extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      loginMenu:[
        {
          url     : '/login',
          title   : '登出'
        },
        {
          url      : '/',
          title    : '首页',
        },
        {
          url      : '/account',
          title    : '账户',
        },
        {
          url      : '/shopping',
          title    : '购物车',
        }
      ],
      visitorMenu: [
        {
          url     : '/login',
          title   : '登录'
        },
        {
          url      : '/',
          title    : '首页',
        }
      ]

    }
  }
  handleLogout = () => {
    window.location.href = '/logout'
  }
  render() {
    const loginMenu = this.state.isLogin ? this.state.loginMenu : this.state.visitorMenu
    return (
      <Header style={{ zIndex: 1, width: '100%' }}> 
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px',textAlign: "right",marginBottom: '64px'}}
        >
          { loginMenu.map( ele => {
            return <Menu.Item key={ele.url}><Link to={ele.url}>{ele.title}</Link></Menu.Item>
          })}
        </Menu>
      </Header>
    )
  }
}
export default Head