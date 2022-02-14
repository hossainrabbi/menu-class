import React from 'react';
import { MenuItems } from '../styles/Elements.style';
import SingleMenu from './SingleMenu';

export default function Menu({ menuItems }) {
    return (
        <MenuItems>
            {menuItems.map((item) => (
                <SingleMenu {...item} key={item.id} />
            ))}
        </MenuItems>
    );
}
