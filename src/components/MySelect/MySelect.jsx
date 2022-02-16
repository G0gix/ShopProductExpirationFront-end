import React from 'react';
import { Form } from 'react-bootstrap';
import "./MySelect.css";

const MySelect = ({ defaultSelect }) => {
    return (
        <Form.Select className='SortSelect'>
            <option disabled>{defaultSelect}</option>
        </Form.Select>
    );
};

export default MySelect;