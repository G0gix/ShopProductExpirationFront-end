import React from 'react';
import MySelect from '../MySelect/MySelect';
import "./FindContainer.css";
import {
    Dropdown,
    InputGroup,
    DropdownButton,
    FormControl,
    Form
} from 'react-bootstrap';


const FindContainer = ({ selectOptions, filter, setFilter }) => {
    return (
        <div className='container__find'>
            <div className="find__container">
                <h3 className="find__container__title">Найти в столбце</h3>
                <Form>
                    <MySelect onChange={selectodSort => setFilter({ ...filter, sort: selectodSort })}
                        value={filter.sort}
                        selectOptions={selectOptions}
                        defaultSelect="Выберете столбец" />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h3 className='find__container__title2'>Введите данные для поиска</h3>
                        <Form.Control onChange={e => setFilter({ ...filter, query: e.target.value })}
                            value={filter.query}
                            type="text"
                            placeholder="Введите данные для поиска" />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default FindContainer;