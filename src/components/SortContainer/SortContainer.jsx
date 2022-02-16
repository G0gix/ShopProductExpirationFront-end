import React from 'react';
import MySelect from '../MySelect/MySelect';
import './SortContainer.css';

const SortContainer = ({ selectOptions, onChange }) => {
    return (
        <div className='container__sort'>
            <div className='sort__container'>
                <h3 className='sort__container__title'>Отсортировать по столбцу:</h3>
                <MySelect onChange={onChange} selectOptions={selectOptions} defaultSelect="Выберете столбец" />
            </div>
        </div>
    );
};

export default SortContainer;