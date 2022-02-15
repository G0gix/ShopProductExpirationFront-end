import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullProductsTable from './components/FullProductsTable'
import {
  Container,
  Navbar,
  Tab,
  Tabs,
} from 'react-bootstrap';
import "./App.css"
import SortContainer from './components/SortContainer/SortContainer';
import FindContainer from './components/FindContainer/FindContainer';

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


        <div className="inputs">
          <h1 className='container__title'>Поиск в таблице</h1>
          <div className="inputs__container">
            <SortContainer />
            <FindContainer />
          </div>
        </div>


        <Tabs defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3 Tabs"
          style={{ marginTop: "60px" }}
        >
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
