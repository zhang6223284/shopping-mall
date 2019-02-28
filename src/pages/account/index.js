import React, { PureComponent } from 'react'
import {
  Table
} from 'antd';
const columns = [{
  title: '名称',
  dataIndex: 'name',
  width: 300,
}, {
  title: '数量',
  dataIndex: 'account',
  width: 300,
}, {
  title: '价格',
  dataIndex: 'price',
  width: 300
},
{
  title: '时间',
  dataIndex: 'time',
}];

class Account extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  TableData = () => {
    const table = []
    for (let i = 0; i < 100; i++) {
      table.push({
        key: i,
        name: `Edward King ${i}`,
        account: 32,
        price: ~~Math.random*100,
        time:new Date().toDateString()
      });
    }
    return table
    
  }
  render() {
    return (
      <Table columns={columns} dataSource={this.TableData()} pagination={{ pageSize: 50 }} scroll={{ y: 960 }} />
    )
  }
}

export default Account