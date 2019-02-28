import React, { PureComponent } from 'react'
import Header from './Header/index'
import { Switch, Route, Redirect } from 'react-router-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { Layout, LocaleProvider } from 'antd'
import routes from '../routes'
import NotFound from '../pages/notFound/index'
import './index.css'
const { Content } = Layout


class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      userInfo: null,
    }
    
  }
  render() {
    const { isLogin, userInfo } = this.state
    if(isLogin) {
      return (
        <LocaleProvider locale={zhCN}>
          <Layout className="wrapper">
            <Header classname="header" userInfo={userInfo} />
            <Layout className="main">
            <Content className="content">
                {isLogin !== 1 ? (
                  <Switch>
                    {routes.map(item => <Route exact key={item.path} path={item.path} component={item.comp} />)}
                    <Route component={NotFound} />
                  </Switch>
                ) : null}
              </Content>
            </Layout>
          </Layout>
        </LocaleProvider>
      )
    } else {
      return <Redirect to="/login" />
    }

  }
}

export default App