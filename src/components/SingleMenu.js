import React from 'react';
import {
    DetailsHeader,
    SingleMenuContainer,
    SingleMenuDetails,
    SingleMenuImage,
} from '../styles/Elements.style';

export default function SingleMenu({ title, img, price, desc }) {
    return (
        <SingleMenuContainer>
            <SingleMenuImage>
                <img src={img} alt={title} />
            </SingleMenuImage>
            <SingleMenuDetails>
                <DetailsHeader>
                    <h4>{title}</h4>
                    <h4>${price}</h4>
                </DetailsHeader>
                <p>{desc}</p>
            </SingleMenuDetails>
        </SingleMenuContainer>
    );
}
