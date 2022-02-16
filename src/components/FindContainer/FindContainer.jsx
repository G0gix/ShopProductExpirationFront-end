import React from 'react';
import MySelect from '../MySelect/MySelect';
import "./FindContainer.css";
import {
    Dropdown,
    InputGroup,
    DropdownButton,
    FormControl
} from 'react-bootstrap';


const FindContainer = ({ selectOptions }) => {
    console.log(selectOptions)
    return (
        <div className='container__find'>
            <div className="find__container">
                <h3 className="find__container__title">Найти в столбце</h3>
                <MySelect selectOptions={selectOptions} defaultSelect="Выберете столбец" />
            </div>
        </div>
    );
};

export default FindContainer;