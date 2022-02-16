import React, { Component, useState } from 'react';
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

function App() {
  const [tableColumnName, settableColumnName] = useState([
    { id: 1, ColumnName: "Название продукта" },
    { id: 2, ColumnName: "Дата изготовления продукта" },
    { id: 3, ColumnName: "Дата упаковки продукта" },
    { id: 4, ColumnName: "Срок годности товара" },
    { id: 5, ColumnName: "Единица измерения" },
    { id: 6, ColumnName: "Годен до" },
    { id: 7, ColumnName: "Кол-во продукта" },
    { id: 8, ColumnName: "Единица измерения" },
    { id: 9, ColumnName: "Отдел магазина" },
    { id: 10, ColumnName: "ФИО главного отдела" },
    { id: 11, ColumnName: "Номер ряда" },
    { id: 12, ColumnName: "Номер стелажа" },
    { id: 13, ColumnName: "Номер полки" },
  ])

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
          <FullProductsTable tableColumnName={tableColumnName} APIUrl="https://localhost:44396/product" />
        </Tab>
        <Tab eventKey="profile" title="Список просроченного товара">
          <FullProductsTable tableColumnName={tableColumnName} APIUrl="https://localhost:44396/product" />
        </Tab>
      </Tabs>

    </div>

  );
}

export default App;