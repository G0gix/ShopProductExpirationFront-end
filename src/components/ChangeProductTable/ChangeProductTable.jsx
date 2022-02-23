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

	const showData = (e) => {
		console.log(tableData.productName)
		console.log(tableData.productManufacturingDate)
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
							   onChange={e => alert(e.target.value)}
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
					/>
					</td>
					<td><input placeholder="Введите данные"
							   className="input"
							   type="text"
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