import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react';

const FullProductsTable = (props) => {
    const [users, setUsers] = useState([]);


    const fetchData = async () => {
        debugger;
        console.log(props.APIUrl);
        let response = await fetch(props.APIUrl, { method: "GET" });
        console.log(response);
        let data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Table bordered responsive hover size="sm" striped>
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
                {users.map(user => (
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
                    </tr>
                ))}

            </tbody>
        </Table >

    );
};

export default FullProductsTable;