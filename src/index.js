import React from 'react'
import ReactDOM from 'react-dom'
import App from './container/index'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import 'antd/dist/antd.css'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/login" component={Login} /> */}

      <Route path="/" component={App} />  
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
