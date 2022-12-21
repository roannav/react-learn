import React from 'react';
import { useState } from 'react';
import { Card, Col, Row, Layout, Breadcrumb, Button, DatePicker, Space, Typography, theme, version } from 'antd';

import 'antd/dist/reset.css';
import logo from './logo.svg';
import './App.css';

const { Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

function MainContent() {
  return (
    <Content style={{margin: '0 16px', }}> 
      {/* margin: top-bottom, then right-left*/}
      <Breadcrumb style={{ margin: '16px 0', }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <Paragraph>
      Just trying out a hodgepodge of various Ant Design components, including Layout, Header, Footer, Sider, Content, Row, Col, Menu, Card, Space, Button, DatePicker, Typography, Title, ... 
      </Paragraph>
      <Paragraph>
      Also using Ant Design icons, theme, version, ...
      </Paragraph>
      {/*
      Without the <Space>, they are stacked vertically, one on top the other,
      without any space between them.
      With the <Space>, they are all in 1 row, with a small space between.
      */}
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>

      <div className="site-card-wrapper">
      <Space direction="vertical" size="large">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Ant Design components" bordered={false}>
              <p>antd version: {version}</p>
              <p>theme: {}</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="React logo" bordered={false}>
              <img src={logo} className="App-logo" alt="logo" />
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
      </Space>
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
  );
}

export default MainContent;
