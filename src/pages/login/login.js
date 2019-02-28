import React, { PureComponent } from 'react';
import './login.css';
import { Redirect } from 'react-router-dom'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

class NormalLoginForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);     
        this.setState({
          isLogin: true
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLogin } = this.state
    console.log(isLogin)
    if(!isLogin) {
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <a className="login-form-forgot" href="/login">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            或 <a href="/login">立即注册</a>
          </Form.Item>
        </Form>
      );
    } else {
      return <Redirect to='/' />
    }
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm