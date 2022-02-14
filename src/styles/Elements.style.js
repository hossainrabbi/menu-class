import styled from 'styled-components';

// App Component
export const MainContainer = styled.main`
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 10px;

    @media (max-width: 992px) {
        max-width: 850px;
    }
`;

// Menu Component
export const MenuItems = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;

    @media (max-width: 992px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

// Single Menu Component
export const SingleMenuContainer = styled.article`
    display: grid;
    grid-template-columns: 200px 3fr;
    align-content: center;
`;

export const SingleMenuImage = styled.div`
    width: 100%;
    height: 140px;
    border: 4px solid var(--main-color);

    img {
        width: 100%;
        height: 100%;
    }
`;

export const SingleMenuDetails = styled.div`
    margin-left: 10px;

    p {
        color: var(--light-dark);
        font-size: 15px;
    }
`;

export const DetailsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    border-bottom: 1px dotted var(--dark-color);
    margin-bottom: 15px;

    h4 {
        &:last-child {
            color: var(--main-color);
        }
    }
`;

// Category Component
export const CategoriesButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;

    button {
        padding: 4px 8px;
        margin: 0 10px;
        cursor: pointer;
        background-color: var(--main-color);
        border: 1.9px solid var(--dark-color);
        color: var(--white-color);
        font-size: 15px;
        text-transform: capitalize;
        font-weight: 600;
        border-radius: 3px;
        transition: 0.3s;

        &:hover {
            background-color: var(--dark-color);
        }
    }
`;
