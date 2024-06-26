import React from 'react';
import { Typography, Row, Col, Card, Divider } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, CodeOutlined } from '@ant-design/icons';
import './HomePage.css';

const { Title, Paragraph } = Typography;

function HomePage() {
  return (
    <div className="home-page">
      <section className="profile-section">
        <Card className="profile-card" hoverable>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} sm={24} md={24} lg={24} className="profile-info">
              <Title level={2}>
                <UserOutlined /> 加藤 陸
              </Title>
              <Paragraph>
              奈良先端科学技術大学院大学 2024年4月 ~ <br></br>
              新潟大学                2020年4月 ~ 2024年3月
              </Paragraph>
              <Divider />
              <Paragraph>
                <MailOutlined /> jiatengl127@gmail.com
              </Paragraph>
              <Paragraph>
                <PhoneOutlined /> not public
              </Paragraph>
              <Divider />
              <Title level={4}>
                <CodeOutlined /> 使用言語
              </Title>
              <Paragraph>
                JavaScript, Python, C, C++, HTML, CSS
              </Paragraph>
              <Title level={4}>
                <CodeOutlined /> フレームワークとライブラリ
              </Title>
              <Paragraph>
                React, Node.js, Express
              </Paragraph>
            </Col>
          </Row>
        </Card>
      </section>
    </div>
  );
}

export default HomePage;
