import React, { PureComponent } from 'react'
import { Card, Col, Row } from 'antd';

const { Meta } = Card;


class Index extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cardData: [1,2,3]
    }
  }
  CardList = (files) => {
    const { cardData } = this.state 
    const cardList = []
    cardData.forEach((ele,index) => {
      
      cardList.push(
        <Col
          key={index}
          span={8}>
    <Card
            key={index}
      hoverable
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta
                key={index}

        title="Europe Street beat"
        description="www.instagram.com"
      />
    </Card>
        </Col>
      )
    });
      
    

    return (
      <Row gutter={16} >
        {cardList}
      </Row>
    )
  }
  CardData() {
    const { cardData } = this.state 
    return cardData.map( data => {
      return  (<Card
      hoverable
      style={{ width: 240, height: 120 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta
        title="Europe Street beat"
        description="www.instagram.com"
      />
    </Card>)
    })
  }


  render() {
    console.log(this.props)
    return (
      <div>
      {this.CardList()}
      </div>
    )
  }
}

export default Index