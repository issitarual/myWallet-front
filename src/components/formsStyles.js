import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 50px);
    justify-content: center;
    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        text-align: center;
        color: #fff;
        margin-bottom: 25px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        height: 58px;
        background-color: #fff;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway', sans-serif;
        color: #333;
        font-size: 20px;
        padding: 11px;
        margin-bottom: 13px;
        ::-webkit-input-placeholder  { 
                color: #000; 
        }
    }
    input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    }
    button{
        height: 46px;
        background-color: #A76AD6;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway', sans-serif;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    p{
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
        text-align: center;
        color: #fff;  
        margin-top: 36px;
        cursor: pointer;
    }
    p:hover{
        text-decoration: underline;
    }
`;

export {Container};