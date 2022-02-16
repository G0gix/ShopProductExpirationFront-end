import React from 'react';
import { Form } from 'react-bootstrap';
import "./MySelect.css";

const MySelect = ({ selectOptions, defaultSelect }) => {
    console.log(selectOptions)

    return (
        <Form.Select className='SortSelect'>
            <option disabled>{defaultSelect}</option>
            {
                selectOptions.map(select =>
                    <option key={select.id}>{select.ColumnName}</option>
                )
            }
        </Form.Select >
    );
};

export default MySelect;