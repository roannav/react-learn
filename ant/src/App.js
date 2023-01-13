import React from 'react';
import { useState } from 'react';
import { Layout, Typography, theme } from 'antd';

import 'antd/dist/reset.css';
import './App.css';
import MainContent from './MainContent';
import TableContent from './TableContent';
import Sidebar from './Sidebar';

const { Header, Footer } = Layout;
const { Title } = Typography;

function App() {
  const {
    token: {colorBgContainer },
  } = theme.useToken();

  return (
  <>
    {/* make the height be the full height of the browser window,
        even if there is only a little content */}
    <Layout style={{ minHeight: '100vh'}}>
      <Header style={{ padding:0, background: colorBgContainer }}>
        <Title>Ant Design Playground</Title>
      </Header>
      <Layout className="site-layout">
        <Sidebar />
        <MainContent /> 
        <TableContent />
      </Layout>
      <Footer style={{ textAlign: 'center', }}>Footer</Footer>
    </Layout>
  </>
  );
}

export default App;
