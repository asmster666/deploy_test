import React, { useState, useEffect } from 'react';
import s from '../styles/main.module.scss';
import { AdvancedSearch, ContentTables, TipsBlock } from '../components';
import { LoaderComponent } from '../elements';
import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const Main = () => {
    const [categories, setCategories] = useState({})
    const [products, setProducts] = useState({})
    const [isOpen, setIsOpen] = useState(false);

    const [categoriesQuery, productsQuery] = useQueries({
        queries: [
        {
            queryKey: ["categories"],
            queryFn: () =>
            axios
                .get('https://dummyjson.com/products/categories')
                .then((res) => res.data),
        },

        {
            queryKey: ["products"],
            queryFn: () =>
            axios
                .get('https://dummyjson.com/products')
                .then((res) => res.data.products),
        },
        ],
    });

    useEffect(() => {
        if(categoriesQuery && productsQuery) {
        setCategories(categoriesQuery?.data);
        setProducts(productsQuery?.data);
        }
    }, [categoriesQuery, productsQuery])

    if(categoriesQuery.isLoading) return <LoaderComponent loading={categoriesQuery.isLoading} />
    
    if(productsQuery.isLoading) return <LoaderComponent loading={productsQuery.isLoading} />


    if (categoriesQuery.error)
        return 'An error has occurred: ' + categoriesQuery.error.message;

    if (productsQuery.error)
        return 'An error has occurred: ' + productsQuery.error.message;

    const handleOpenFn = () => {
        !isOpen ? setIsOpen(!isOpen) : console.log('it was already opened');
    }

    return (
        <div className={s.main}>
            <div className={s.mainWrap}>
                <AdvancedSearch goods={products} categories={categories} isFocusedFn={handleOpenFn} />
                <TipsBlock classN={s.mainWrap__tips} isOpen={isOpen} />
                <ContentTables goods={products} categories={categories} isOpenFn={handleOpenFn} />
            </div>
        </div>
    )
}

export default Main;