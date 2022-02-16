import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react';

const FullProductsTable = ({ tableColumnName, APIUrl }) => {
    const [users, setUsers] = useState([]);
    const [isLoaded, SetisLoaded] = useState(true);

    const fetchData = async () => {
        let response = await fetch(APIUrl, { method: "GET" });
        let data = await response.json();
        setUsers(data);
        SetisLoaded(false);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const sortedPosts = useMemo(() => {
        console.log("Отработала функция сортировки")
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSeachedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts]);

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
                </Table >}
        </div>
    );
};

export default FullProductsTable;