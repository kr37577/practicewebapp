import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import '../App.css';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">
        <h3 style={{ color: 'white' }}>My Website</h3>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/blog">Blog</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/sns">SNS</Link></Menu.Item>
      </Menu>
    </Header>
  );
}

export default AppHeader;
