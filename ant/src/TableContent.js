import React from 'react';
import { Table, Layout, Space } from 'antd';
import {
  TwitterOutlined,
  RedditOutlined,
  GitlabOutlined,
  CodepenOutlined,
  CodeSandboxOutlined,
} from '@ant-design/icons';

import 'antd/dist/reset.css';

const { Content } = Layout;


const dataSource = [
  {
    key: '1',
    username: 'fionaapp',
    languages: 'JavaScript, Python',
    phone: '213-111-1111',
  },
  {
    key: '2',
    username: 'samreily',
    languages: 'Perl, C/C++/C#',
    phone: '213-111-1112',
  },
  {
    key: '3',
    username: 'penz45en',
    languages: 'Java, Rust, Ruby',
    phone: '213-111-1113',
  },
];

// Works for Unicode characters.
// Ignores case and diacritics.
// Currently hardcoded to 'en' language.
const alphabeticalSort = (a, b) => {
  return a.localeCompare( b, 'en', {sensitivity: 'base'});
}

// This assumes a 10 digit phone number
const phoneNumberSort = (a, b) => {
  // Remove all non-number characters from the phone number string
  // and convert to a number.
  let a_num = +(a.replace(/\D/g, ''));
  let b_num = +(b.replace(/\D/g, ''));
  return a_num - b_num;
}

// Cycle between 'ascend' and 'descend'.
// The last 'ascend' is to tell Ant, not to cycle back to 'no sort'.
const ASCEND_DESCEND = ['ascend', 'descend', 'ascend'];

const columns = [
  {
    title: 'My Links',
    key: 'mylinks',
    render: (_, record) => (
      <Space size="small">
        <a><TwitterOutlined/></a>
        <a><RedditOutlined/></a>
        <a><GitlabOutlined/></a>
        <a><CodepenOutlined/></a>
        <a><CodeSandboxOutlined/></a>
      </Space>
    ),
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    sorter: (a, b) => alphabeticalSort(a.username, b.username),
    sortDirections: ASCEND_DESCEND,
  },
  {
    title: 'languages',
    dataIndex: 'languages',
    key: 'languages',
    sorter: (a, b) => alphabeticalSort(a.languages, b.languages),
    sortDirections: ASCEND_DESCEND,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone',
    sorter: (a, b) => phoneNumberSort(a.phone, b.phone),
    sortDirections: ASCEND_DESCEND,
  },
];



function TableContent() {
  return (
    <Content style={{margin: '0 16px', }}> 
      <Table dataSource={dataSource} columns={columns} />
    </Content>
  );
}

export default TableContent;
