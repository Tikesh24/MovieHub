import style from "styled-components";

export const Wraper = style.div`
    background: var(--darkGrey);
    padding:0 20px;
`;

export const Content = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin:0 auto;
`;

export const LogoImg = style.img`
    width: 200px;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`;

export const TMDBLogoImg = style.img`
    width: 100px;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`;
