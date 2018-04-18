import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="demo-container">
        <Row className="demo-row" gutter={100}>
          <Col className="demo-col" span={12}>Col</Col>
          <Col className="demo-col" span={12}>Col</Col>
        </Row>
      </div>
    );
  }
}

export default App;
