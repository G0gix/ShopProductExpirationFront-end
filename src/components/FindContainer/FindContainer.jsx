import React from 'react';
import MySelect from '../MySelect/MySelect';
import "./FindContainer.css";
import {
    Dropdown,
    InputGroup,
    DropdownButton,
    FormControl
} from 'react-bootstrap';


const FindContainer = () => {
    return (
        <div className='container__find'>
            <div className="find__container">
                <h3 className="find__container__title">Найти в столбце</h3>
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title="Столбец"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item>Столбец 1</Dropdown.Item>
                        <Dropdown.Item>Столбец 2</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-label="Text input with dropdown button" />
                </InputGroup>
            </div>
        </div>
    );
};

export default FindContainer;