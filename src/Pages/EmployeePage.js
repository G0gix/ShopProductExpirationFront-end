import { useNavigate, useLocation, Navigate } from 'react-router';
import { useAuth } from '../components/hooks/useAuth';
import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullAdminProductsTable from '../components/FullAdminProductsTable'
import {
	Button,
	Tab,
	Tabs,
	Modal,
} from 'react-bootstrap';
import "../App.css"
import SortContainer from '../components/SortContainer/SortContainer';
import FindContainer from '../components/FindContainer/FindContainer';
import { usePosts } from '../components/hooks/useTable'


//#region UrlToFetch
function getDateTime() {
	let dateNow = new Date().toLocaleString().replace(",", "").toString();
	console.log(dateNow);

	return "https://localhost:44396/product/" + dateNow;
}

let getAllProductsURL = "https://localhost:44396/product";
let getExpiredGoodsURL = getDateTime();
//#endregion

const EmployeePage = () => {
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
		{ id: 14, title: "Actions", ColumnName: "Действия" },
	]

	//#region logOut
	const navigate = useNavigate();
	const { signout } = useAuth();
	//#endregion

	//#region States
	const [fullDataToTable, setfullDataToTable] = useState([]);
	const [ExpiredGoodsToTable, setExpiredGoodsToTable] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [isLoaded, SetisLoaded] = useState(true);

	//#endregion

	//#region FetchData


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

	const sortedAndSeachedTable = usePosts(fullDataToTable, filter.sort, filter.query)
	const sortedExpiredGoodsToTable = usePosts(ExpiredGoodsToTable, filter.sort, filter.query)

	const removeFullTableItem = (product) => {
		setfullDataToTable(fullDataToTable.filter(p => p.id !== product));
		setExpiredGoodsToTable(ExpiredGoodsToTable.filter(p => p.id !== product));
	}

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button variant="success" style={{ marginTop: 150 }} onClick={() => signout(() => navigate("/", { replace: true }))}>Выйти</Button>

			<Tabs defaultActiveKey="profile"
				id="uncontrolled-tab-example"
				className="mb-3 Tabs"
				style={{ marginTop: "60px" }}
			>
				<Tab eventKey="home" title="Полный список товаров">
					<FullAdminProductsTable tableColumnName={tableColumnName}
						tableData={sortedAndSeachedTable}
						isLoaded={isLoaded}
						remove={removeFullTableItem}
						onClick={handleShow}
					/>
				</Tab>
				<Tab eventKey="profile" title="Список просроченного товара">
					<FullAdminProductsTable tableColumnName={tableColumnName}
						tableData={sortedExpiredGoodsToTable}
						isLoaded={isLoaded}
						remove={removeFullTableItem}
						onClick={handleShow}
					/>
				</Tab>
			</Tabs>


			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Изменить </Modal.Title>
				</Modal.Header>
				<Modal.Body></Modal.Body>
			</Modal>


		</div >
	);
};

export default EmployeePage;