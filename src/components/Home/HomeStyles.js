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
    justify-content: ${props => props.state === true? "": "center"};
    align-items: ${props => props.state === true? "": "center"};
    padding: 23px 12px;
    position: relative;
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

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 24px);
    position: absolute;
    bottom: 23px;
    h6{
        font-family: 'Raleway', sans-serif;
        color: #000;
        font-size: 17px;
        font-weight: bold;
    }
`;

const Value = styled.h5`
    font-family: 'Raleway', sans-serif;
    color: ${props => props.type? "#03AC00": "#D95050"};
    font-size: 17px;
`;

const Event = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    p{
        font-size: 16px!important;
    }
`;

const Created = styled.div`
    display: flex;
`;

const Description = styled.p`
    margin-left: 15px;
    color: #000!important;
`;

const EventContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 23px;
    width: calc(100% - 24px);
    max-height: calc(100% - 80px);
`;

export{Header, Footer, Container, HomeContainer, TotalContainer, Value, Event, EventContainer, Description, Created};