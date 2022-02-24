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
import { usePosts } from '../components/hooks/useTable'
import ChangeProductTable  from '../components/ChangeProductTable/ChangeProductTable';
import "./PagesStyles/EmployeePage.css"


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

	const [show, setShow] = useState(false);

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

	//#region updateDataInTable
	const updateDataInTable = (e) => {
		try {
			fetchData();
			alert("Таблица обновлена")
		}catch (e) {
			alert("Ошибка неВозможно обновить таблицу!")
		}
	}
	//#endregion

	const sortedAndSeachedTable = usePosts(fullDataToTable, filter.sort, filter.query)
	const sortedExpiredGoodsToTable = usePosts(ExpiredGoodsToTable, filter.sort, filter.query)

	//#region DeleteProductInDB
	const removeFullTableItem = (product) => {
		try {
			let deleteProductInDB =  fetch(`https://localhost:44396/product/${product}`,{method:"DELETE"})
			setfullDataToTable(fullDataToTable.filter(p => p.id !== product));
			setExpiredGoodsToTable(ExpiredGoodsToTable.filter(p => p.id !== product));
			alert("Успешно удалено!")
		}catch (e) {
			alert("Ошибка!")
		}
	}
	//#endregion

	//#region dbSignOut
	const dbSignOut = async () => {
		debugger;
		let dbSignOutFetch = await fetch(`https://localhost:44396/account/1`,{method:"GET"})
		if (dbSignOutFetch.ok) {
			signout(() => navigate("/", { replace: true }));
		}else {
			alert("Ошибка")
		}

	}
	//# endregion

	//#region showModal
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//#endregion

	return (
		<div>
			<div className="signOutButton__container">
				<Button  variant="light"
						onClick={dbSignOut}
						className = "signOutButton"
				>Выйти</Button>
			</div>
			<div style={{marginTop:150}}>


				<div className="updateButton__container">
					<Button onClick={updateDataInTable}
							variant="success"
							className="updateButton"
					>Обновить таблицу</Button>
				</div>


				<Tabs defaultActiveKey="profile"
					id="uncontrolled-tab-example"
					className="mb-3 Tabs"
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
					<Tab eventKey="newProduct"  title="Добавить новый товар ">
						<ChangeProductTable />
					</Tab>
				</Tabs>
				<div style={{height:1500}}></div>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Изменить </Modal.Title>
					</Modal.Header>
					<Modal.Body></Modal.Body>
				</Modal>
			</div>
		</div>
	);
};

export default EmployeePage;