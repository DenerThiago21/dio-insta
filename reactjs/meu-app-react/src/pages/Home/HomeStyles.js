import styled from 'styled-components';
import px2wv from "../../utils/px2wv";

export const Container = styled.div `
    display: flex;
    flex-wrap´: wrap;
    justfy-content: center;
    margin: ${px2wv(32)};
    max-widrth: 100%;

    @media (min-width: 1024px)
    {
        flex-wrap: nowrap;
    }
`;

export const Box = styled.div`
    display: flex;
    width: ${px2wv(320, 320)};
    min-height: ${px2wv(200,320)};
    flex-direction: column;
    padding: ${px2wv(20)};
    margin: ${px2wv(20)};
    background-color: ${props => props.bgColor};
    height: 100%;

    @media (min-width: 768px)
    {
        width: ${px2wv(320, 768)};
        min-heigth: ${px2wv(200, 768)};
        heigth: 100%;
    }

    @media (min-width: 1024px)
    {
        width: ${px2wv(500)};
        min-heigth: ${px2wv(300)};
        heigth: 100%;
    }
`;

export const BoxTitle = styled.h3`
    color: #333;
    font-size: 2rem;
    text-align: center;

    @media (min-width: 1024px)
    {
        font-size: 1.5rem;
    }
`;

export const BoxText = styled.p`
    magin-top: ${px2wv(20)};
    color: #639;
    font-size: 1.5rem;

    @media (min-width: 1024px)
    {
        font-size: 1rem;
    }
`;
