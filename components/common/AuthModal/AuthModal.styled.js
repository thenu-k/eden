import styled from "styled-components";

export const AuthModalContainer = styled.div`
    width: 100%;
    & .inner.authmodal{
        width: 500px;
        & .text{
            width: 100%;
            padding: 40px 0;
            display: flex; flex-direction: column; align-items: center;
            & h1{
                font-size: 1.7em;
                margin-bottom: 10px;
                font-weight: 600;
            }
        }
        & form{
            width: 100%;
            height: 300px;
            background-color: white;
            border-radius: 20px;
            display: flex; align-items: center; flex-direction: column;
            & .alt{
                padding: 40px 0 20px 0;
                width: 80%;
                display: flex; justify-content: space-evenly;
                & button{
                    border-radius: 5px; 
                    padding: 20px 25px;
                    background-color: #f8f8f8;
                    color: black;
                    cursor: pointer;
                    &:hover{
                        background-color: #e8e8e8;
                    }
                }
            }
        }
    }
`