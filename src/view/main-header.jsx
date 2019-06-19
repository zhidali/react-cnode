import React, { Component } from 'react';
// import Button from 'antd/lib/button';
// import { Button } from 'antd';
import { Link } from 'react-router-dom'
import './header.less'
import { Layout, Row, Col, Divider, Menu, Icon } from 'antd'
const { SubMenu } = Menu

class MainHeader extends Component {
  state = {}
  render () {
    return (
      <Layout.Header>
        <Row className="wrap">
          <Col md={4} xs={24}>
            <h1 className="logo">logo</h1>
          </Col>
          <Col md={20} xs={0}>
            <Divider type="vertical" className="headerDivider" />
            <Menu theme="dark" mode="horizontal" className="headNav">
              <Menu.Item>
                <Link to="/index">
                  <Icon type="home"/>
                首页</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/book">教程</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about">关于</Link>
              </Menu.Item>
              {/* <SubMenu title="子菜单">
                <Menu.Item>子菜单项</Menu.Item>
              </SubMenu> */}
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}

export default MainHeader;