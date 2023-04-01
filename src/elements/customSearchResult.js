import React from 'react';
import s from '../styles/components.module.scss';

import { CategoriesList, ProductsList } from '.';

const CustomSearchResult = ({ start, searchParam, goods, categories }) => {
    return (
        <div 
            id={'customSearchResult'}
            className={s.searchWrap__customList} 
            style={{display: start ? 'flex' : 'none'}}
        >
            <CategoriesList searchParam={searchParam} categories={categories} />
            <ProductsList searchParam={searchParam} goods={goods} />
        </div>
    )
}

export default CustomSearchResult;