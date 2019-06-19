import React, {
  Component
} from 'react';
import {
  Row, Col
} from 'antd';
import IndexMenu from './indexMenu'
class Index extends Component {
  render () {
    return (
      <Row className="wrap-left">
        <Col md={4} className="list">
          <IndexMenu />
        </Col>
        <Col md={20} className="content">
          111
        </Col>
      </Row>
    )
  }
}

export default Index;