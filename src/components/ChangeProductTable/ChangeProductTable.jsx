import React, {useState} from 'react';
import { Table, Button, Modal, } from 'react-bootstrap';
import "./ChangeProductTable.css";


const ChangeProductTable = () => {
	const [tableData,setTableData ] =  useState(
		{
			productName:'',
			productManufacturingDate:  '',
			productPackagingDate: '',
			shelfLife: '',
			timeUnits: '',
			sellBy: '',
			productCount: '',
			countUnits: '',
			shopDepartment: '',
			departmentHeadFio: '',
			rowNumber: '',
			shelvingNumber: '',
			shelfNumber: '',
		})

	const [validationError, servalidationError] = useState("");
	const [show, setShow] = useState(false);

	//#region ShowAnd Close Modal
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//#endregion

	const showData = async (e) => {
		if (tableData.productName == "" 			 || tableData.productName == " " 			  ||
			tableData.productManufacturingDate == "" || tableData.productManufacturingDate == " " ||
			tableData.shelfLife == "" 				 || tableData.shelfLife == " " 				  ||
			tableData.timeUnits == "" 				 || tableData.timeUnits == " " 				  ||
			tableData.sellBy == "" 					 || tableData.sellBy == " " 				  ||
			tableData.shopDepartment == "" 			 || tableData.shopDepartment == " "
		){
			servalidationError("Некоторые поля не заполнены");
			handleShow();
		}else {
			servalidationError("");
			try {
				let createNewProductFetch = await fetch(`https://localhost:44396/product/?productName=${tableData.productName}
			&productManufacturingDate=${tableData.productManufacturingDate}
			&productPackagingDate=${tableData.productPackagingDate}
			&shelfLife=${tableData.shelfLife}
			&timeUnits=${tableData.timeUnits}
			&sellBy=${tableData.sellBy}
			&productCount=${tableData.productCount}
			&countUnits=${tableData.countUnits}
			&shopDepartment=${tableData.shopDepartment}
			&departmentHeadFio=${tableData.departmentHeadFio}
			&rowNumber=${tableData.rowNumber}
			&shelvingNumber=${tableData.shelvingNumber}
			&shelfNumber=${tableData.shelfNumber}`, {method: "POST"});
				alert("Продукт добавлен");
			} catch (e) {
				alert("error")
			}
		}
	}

	return (
		<div>
			<h1 className="attention">Поля отмеченные <span className="attention__green">зеленым</span>  обязательны для заполнения</h1>
		<Table bordered
			   responsive
			   hover
			   size="sm"
			   striped
			   style={{ marginTop: "10px" }}
		>
			<thead>
				<tr>
					<th>Название продукта</th>
					<th>Дата изготовления продукта</th>
					<th>Дата упаковки продукта</th>
					<th>Срок годности товара</th>
					<th>Единица измерения</th>
					<th>Годен до</th>
					<th>Кол-во продукта</th>
					<th>Единица измерения</th>
					<th>Отдел магазина</th>
					<th>ФИО главного отдела</th>
					<th>Номер ряда</th>
					<th>Номер стелажа</th>
					<th>Номер полки</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><input placeholder="Введите данные"
							   className="input required "
							   type="text"
							   onChange={e =>  setTableData({...tableData, productName: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input required "
							   type="datetime-local"
							   onChange={e => setTableData({...tableData,productManufacturingDate: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="datetime-local"
							   onChange={e => setTableData({...tableData,productPackagingDate: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input required "
							   type="number"
							   onChange={e => setTableData({...tableData,shelfLife: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input required"
							   type="text"
							   onChange={e => setTableData({...tableData,timeUnits: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input required "
							   type="datetime-local"
							   onChange={e => setTableData({...tableData,sellBy: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="number"
							   onChange={e => setTableData({...tableData,productCount: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
							   onChange={e => setTableData({...tableData,countUnits: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данныеtttt"
							   className="input required"
							   type="text"
							   onChange={e => setTableData({...tableData,shopDepartment: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
							   onChange={e => setTableData({...tableData,departmentHeadFio: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="number"
							   onChange={e => setTableData({...tableData,rowNumber: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="number"
							   onChange={e => setTableData({...tableData,shelvingNumber: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="number"
							   onChange={e => setTableData({...tableData,shelfNumber: e.target.value})}
					/>
					</td>
				</tr>
			</tbody>
		</Table >
			<Button onClick={showData} >Добавить</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						Ошибка! <h1 style={{fontSize:20}} >{validationError}</h1>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<h1 className="Modalattention">Поля отмеченные <span className="attention__green">зеленым</span>  обязательны для заполнения</h1>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Закрыть
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ChangeProductTable;