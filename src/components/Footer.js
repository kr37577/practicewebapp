import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import './Footer.css';

const { Footer } = Layout;
const { Text, Link } = Typography;

function AppFooter() {
  return (
    <Footer className="footer">
      <Row justify="center" align="middle">
        <Col xs={24} sm={12} md={8} lg={6} className="footer-column">
          <Text>© 2024 Your Name</Text>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} className="footer-column">
          <Link href="https://github.com/kr37577" target="_blank">
            <GithubOutlined className="footer-icon" />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank">
            <TwitterOutlined className="footer-icon" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank">
            <LinkedinOutlined className="footer-icon" />
          </Link>
        </Col>
      </Row>
    </Footer>
  );
}

export default AppFooter;
