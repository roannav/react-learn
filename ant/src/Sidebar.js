import React from 'react';
import { useState } from 'react';
import { Layout, Menu, theme } from 'antd';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import 'antd/dist/reset.css';

const { Sider } = Layout;

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

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}>
      <div style={{
        height: 32,
        margin: 16,
        background: 'rgba(255, 255, 255, 0.2)',
      }}
      />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" 
        items={items} />
    </Sider>
  );
}

export default Sidebar;
