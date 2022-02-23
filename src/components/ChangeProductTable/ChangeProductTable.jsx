import React, {useState} from 'react';
import { Table, Button, FormGroup, } from 'react-bootstrap';
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

	const showData = async (e) => {
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
			&shelfNumber=${tableData.shelfNumber}`,{method:"POST"});
			alert("Продукт добавлен");
		}catch (e) {
			alert("error")
		}
	}

	return (
		<div>

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
							   className="input"
							   type="text"
							   onChange={e =>  setTableData({...tableData, productName: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
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
							   className="input"
							   type="number"
							   onChange={e => setTableData({...tableData,shelfLife: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
							   onChange={e => setTableData({...tableData,timeUnits: e.target.value})}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
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
							   className="input"
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

		</div>
	);
};

export default ChangeProductTable;