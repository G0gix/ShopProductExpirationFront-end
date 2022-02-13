import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullProductsTable from './components/FullProductsTable'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


import "./App.css"

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Shop product expiration</Navbar.Brand>
          </Container>
        </Navbar>

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 Tabs">
          <Tab eventKey="home" title="Полный список товаров">
            <FullProductsTable APIUrl="https://localhost:44396/product" />
          </Tab>
          <Tab eventKey="profile" title="Список просроченного товара">
            <FullProductsTable APIUrl="https://localhost:44396/product" />
          </Tab>
        </Tabs>

      </div>

    );
  }
}
