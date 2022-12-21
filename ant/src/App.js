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
import './App.css';
import MainContent from './MainContent';

const { Header, Footer, Sider } = Layout;

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
        <MainContent /> 
      </Layout>
      <Footer style={{ textAlign: 'center', }}>Footer</Footer>
    </Layout>
  </>
  );
}

export default App;
