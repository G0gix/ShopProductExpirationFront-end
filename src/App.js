import React, { Component, useState, useEffect } from 'react';
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


function getDateTime() {
  let dateNow = new Date().toLocaleString().replace(",", "").toString();
  console.log(dateNow);

  return "https://localhost:44396/product/" + dateNow;
}

let getAllProductsURL = "https://localhost:44396/product";
let getExpiredGoodsURL = getDateTime();


function App() {
  const tableColumnName = [
    { id: 1, title: "productName", ColumnName: "Название продукта" },
    { id: 2, title: "productManufacturingDate", ColumnName: "Дата изготовления продукта" },
    { id: 3, title: "productPackagingDate", ColumnName: "Дата упаковки продукта" },
    { id: 4, title: "shelfLife", ColumnName: "Срок годности товара" },
    { id: 5, title: "timeUnits", ColumnName: "Единица измерения" },
    { id: 6, title: "sellBy", ColumnName: "Годен до" },
    { id: 7, title: "productCount", ColumnName: "Кол-во продукта" },
    { id: 8, title: "countUnits", ColumnName: "Единица измерения" },
    { id: 9, title: "shopDepartment", ColumnName: "Отдел магазина" },
    { id: 10, title: "departmentHeadFio", ColumnName: "ФИО главного отдела" },
    { id: 11, title: "rowNumber", ColumnName: "Номер ряда" },
    { id: 12, title: "shelvingNumber", ColumnName: "Номер стелажа" },
    { id: 13, title: "shelfNumber", ColumnName: "Номер полки" },
  ]


  //#region FetchData
  const [fullDataToTable, setfullDataToTable] = useState([]);
  const [ExpiredGoodsToTable, setExpiredGoodsToTable] = useState([]);
  const [isLoaded, SetisLoaded] = useState(true);

  const fetchData = async () => {
    let FullDataResponse = await fetch(getAllProductsURL, { method: "GET" });
    let ExpiredGoodsResponse = await fetch(getExpiredGoodsURL, { method: "GET" });
    let fullDataToTableJSON = await FullDataResponse.json();
    let ExpiredGoodsResponseJSON = await ExpiredGoodsResponse.json();
    setfullDataToTable(fullDataToTableJSON);
    setExpiredGoodsToTable(ExpiredGoodsResponseJSON)
    SetisLoaded(false);
  }

  useEffect(() => {
    fetchData()
  }, [])
  //#endregion


  //#region dataToSort table or find in table
  const [selectedSort, setselectedSort] = useState(tableColumnName[0].ColumnName);
  const [searchDataFromDropDown, setssearchDataFromDropDown] = useState(tableColumnName[0].ColumnName);
  const [searchQuery, setsearchQuery] = useState('');

  const sortPosts = (sort) => {
    setselectedSort(sort)

  }
  const searchSelect = (seach) => {
    setssearchDataFromDropDown(seach);
  }

  const searchQueryFromInput = (data) => {
    setsearchQuery(data)

  }
  //#endregion

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className='Navbar__Container'>
          <Navbar.Brand>Shop product expiration</Navbar.Brand>
        </Container>
      </Navbar>

      <h1>{searchDataFromDropDown}</h1>
      <h1>{selectedSort}</h1>
      <h1>{searchQuery}</h1>

      <div className="inputs">
        <h1 className='container__title'>Поиск в таблице</h1>
        <div className="inputs__container">
          <SortContainer onChange={sortPosts} selectOptions={tableColumnName} />
          <FindContainer onTextChange={searchQueryFromInput} onChange={searchSelect} selectOptions={tableColumnName} />
        </div>
      </div>

      <Tabs defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 Tabs"
        style={{ marginTop: "60px" }}
      >
        <Tab eventKey="home" title="Полный список товаров">
          <FullProductsTable tableColumnName={tableColumnName}
            tableData={fullDataToTable}
            isLoaded={isLoaded}
          />
        </Tab>
        <Tab eventKey="profile" title="Список просроченного товара">
          <FullProductsTable tableColumnName={tableColumnName}
            tableData={ExpiredGoodsToTable}
            isLoaded={isLoaded}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;