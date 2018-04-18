import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="demo-container">
        <p>Container</p>
        <Row className="demo-row" gutter={100}>
          <p>Row</p>
          <Col className="demo-col" span={12}>Col</Col>
          <Col className="demo-col" span={12}>Col</Col>
        </Row>
      </div>
    );
  }
}

export default App;
