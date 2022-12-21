import React from 'react';
import { useState } from 'react';
import { Card, Col, Row, Layout, Menu, Breadcrumb, Button, DatePicker, Space, Typography, theme, version } from 'antd';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import 'antd/dist/reset.css';
import logo from './logo.svg';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
      /*
    <div className="App">
      <header className="App-header">
      </header>
    </div>
      */
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer },
  } = theme.useToken();

  return (
  <>
  {/* make the height be the full height of the browser window,
      even if there is only a little content */}
    <Layout style={{ minHeight: '100vh'}}>
      <Header style={{ padding:0, background: colorBgContainer }}>antd version: {version}</Header>
      <Layout className="site-layout">
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
          />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Content style={{margin: '0 16px', }}> 
          {/* margin: top-bottom, then right-left*/}
          <Breadcrumb style={{ margin: '16px 0', }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <h1>Just trying out a hodgepodge of various Ant Design components, including Layout, Header, Footer, Sider, Content, Row, Col, Menu, Card, Space, Button, DatePicker, theme, version</h1>
          {/*
          Without the <Space>, they are stacked vertically, one on top the other,
          without any space between them.
          With the <Space>, they are all in 1 row, with a small space between.
          */}
          <Space>
            <DatePicker />
            <Button type="primary">Primary Button</Button>
          </Space>
          <img src={logo} className="App-logo" alt="logo" />

          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Create React App" bordered={false}>
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </Card>
              </Col>
            </Row>
          </div>
          <Row style={{ width: "100%", border: "1px solid red" }}>
            <Col>test1</Col>
            <Col>test1</Col>
            <Col>test1</Col>
            <Col>test1</Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: "space-between" }}>
            <Card>test2</Card>
            <Card>test2</Card>
            <Card>test2</Card>
            <Card>test2</Card>
          </div>
          <div style={{ display: 'flex', justifyContent: "space-between" }}>
            <Card style={{ flex:'1'}}>test3</Card>
            <Card style={{ flex:'1', height:'100px'}}>test3</Card>
            <Card style={{ flex:'1'}}>test3</Card>
            <Card style={{ flex:'1'}}>test3</Card>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center', }}>Footer</Footer>
    </Layout>
  </>
  );
}

export default App;
