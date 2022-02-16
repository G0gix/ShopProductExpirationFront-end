import React from 'react';
import { Form } from 'react-bootstrap';
import "./MySelect.css";

const MySelect = ({ selectOptions, defaultSelect, onChange }) => {
    return (
        <Form.Select onChange={e => onChange(e.target.value)}
            className='SortSelect'
        >

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