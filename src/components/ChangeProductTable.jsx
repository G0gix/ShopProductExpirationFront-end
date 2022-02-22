import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ChangeProductTable = () => {
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
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
					<td><input type="text"/> </td>
				</tr>
			</tbody>
		</Table >
				<td><Button>Добавить</Button></td>

		</div>
	);
};

export default ChangeProductTable;