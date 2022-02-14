import React from 'react';
import { CategoriesButton } from '../styles/Elements.style';

export default function Category({ categories, filterCategory }) {
    return (
        <CategoriesButton>
            {categories.map((item) => (
                <button
                    type="button"
                    onClick={() => filterCategory(item)}
                    key={item}
                >
                    {item}
                </button>
            ))}
        </CategoriesButton>
    );
}
