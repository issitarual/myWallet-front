import styled from "styled-components";

const HomeContainer = styled.body`
    padding: 0;
    height: calc(100vh - 50px);
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 22px;
    h1{
        font-family: 'Raleway', sans-serif;
        color: #fff;
        font-size: 26px;
        font-weight: bold;
    }
`;

const Container = styled.div`
    width: 100%;
    height: calc(100% - 171px);
    background-color: #fff;
    margin-bottom: 13px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-family: 'Raleway', sans-serif;
        color: #868686;
        font-size: 20px;
        text-align: center;
    }
`;

const Footer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        width: calc(50% - 8px);
        height: 114px;
        padding: 12px;
        background-color: #A328D6;
        border-radius: 5px;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        font-family: 'Raleway', sans-serif;
        color: #fff;
        font-size: 17px;
        font-weight: bold;
        text-align: start;
    }
`;

export{Header, Footer, Container, HomeContainer};