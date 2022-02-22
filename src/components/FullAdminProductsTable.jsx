import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const FullAdminProductsTable = ({ tableColumnName, isLoaded, tableData, remove, onClick }) => {


	return (
		<div>
			{isLoaded
				?
				<div style={{ fontSize: "20px" }}>Загрузка</div>
				:
				<Table bordered
					responsive
					hover
					size="sm"
					striped
					style={{ marginTop: "10px" }}
				>
					<thead>
						<tr>
							{
								tableColumnName.map(option =>
									<th data-title={option.title} key={option.id}>
										{option.ColumnName}
									</th>
								)
							}
						</tr>
					</thead>
					<tbody>
						{tableData.map(user => (
							<tr key={user.id}>
								<td>{user.productName}</td>
								<td>{user.productManufacturingDate}</td>
								<td>{user.productPackagingDate}</td>
								<td>{user.shelfLife}</td>
								<td>{user.timeUnits}</td>
								<td>{user.sellBy}</td>
								<td>{user.productCount}</td>
								<td>{user.countUnits}</td>
								<td>{user.shopDepartment}</td>
								<td>{user.departmentHeadFio}</td>
								<td>{user.rowNumber}</td>
								<td>{user.shelvingNumber}</td>
								<td>{user.shelfNumber}</td>
								<td style={{ display: 'flex' }}>
									<Button style={{ marginRight: 10 }}
										variant="danger"
										onClick={() => remove(user.id)}
									>Удалить</Button>
									<Button variant="warning"
										onClick={onClick}
									>Изменить</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table >}
		</div>
	);
};

export default FullAdminProductsTable;