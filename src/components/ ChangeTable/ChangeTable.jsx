import React, {useState} from 'react';
import {Table, Button} from "react-bootstrap";

const AddProductTable = ({data}) => {
    const [tableData,setTableData ] =  useState(
        {
            id: data.id,
            productName: data.productName,
            productManufacturingDate:  data.productManufacturingDate,
            productPackagingDate: data.productPackagingDate,
            shelfLife: data.shelfLife,
            timeUnits: data.timeUnits,
            sellBy: data.sellBy,
            productCount: data.productCount,
            countUnits: data.countUnits,
            shopDepartment: data.shopDepartment,
            departmentHeadFio: data.departmentHeadFio,
            rowNumber: data.rowNumber,
            shelvingNumber: data.shelvingNumber,
            shelfNumber: data.shelfNumber,
        })

    const updateData = async (e) => {
        if (tableData.productName == "" 			 || tableData.productName == " " 			  ||
            tableData.shopDepartment == "" 			 || tableData.shopDepartment == " "
        ){
            alert("Некоторые поля не заполнены");

        }else {
            try {
                let json = JSON.stringify(tableData);
                console.log(json);

                let createNewProductFetch = await fetch(`https://localhost:44396/product/?Id=${tableData.id}
                &productName=${tableData.productName}
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
                &shelfNumber=${tableData.shelfNumber}`,
                    {method: "PUT"});
                alert("Продукт Обновлён");

            } catch (e) {
                alert("Ошибка " + e)
            }
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
                               value={tableData.productName}
                               onChange={e =>  setTableData({...tableData, productName: e.target.value})}
                    />
                    </td>
                   <td><input placeholder="Введите данные"
                               className="input"
                               type="number"
                               value={tableData.productCount}
                               onChange={e => setTableData({...tableData,productCount: e.target.value})}
                    />
                    </td>
                    <td><input placeholder="Введите данные"
                               className="input"
                               type="text"
                               value={tableData.countUnits}
                               onChange={e => setTableData({...tableData,countUnits: e.target.value})}
                    />
                    </td>
                    <td><input placeholder="Введите данные"
                               className="input required"
                               type="text"
                               value={tableData.shopDepartment}
                               onChange={e => setTableData({...tableData,shopDepartment: e.target.value})}
                    />
                    </td>
                    <td><input placeholder="Введите данные"
                               className="input"
                               type="text"
                               value={tableData.departmentHeadFio}
                               onChange={e => setTableData({...tableData,departmentHeadFio: e.target.value})}
                    />
                    </td>
                    <td><input placeholder="Введите данные"
                               className="input"
                               type="number"
                               value={tableData.rowNumber}
                               onChange={e => setTableData({...tableData,rowNumber: e.target.value})}
                    />
                    </td>
                    <td><input placeholder="Введите данные"
                               className="input"
                               type="number"
                               value={tableData.shelvingNumber}
                               onChange={e => setTableData({...tableData,shelvingNumber: e.target.value})}
                    />
                    </td>
                    <td><input placeholder="Введите данные"
                               className="input"
                               type="number"
                               value={tableData.shelfNumber}
                               onChange={e => setTableData({...tableData,shelfNumber: e.target.value})}
                    />
                    </td>
                </tr>
                </tbody>
            </Table >
            <Button variant="success" onClick={updateData}>Изменить</Button>
        </div>
    );
};

export default AddProductTable;
