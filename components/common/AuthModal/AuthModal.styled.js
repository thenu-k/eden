import styled from "styled-components";

export const AuthModalContainer = styled.div`
    width: 100%;
    & *:focus{
        outline: 0;
        outline: 2px solid blue;
    }
    /* Remove this  */
    margin-bottom: 100px;
    & .inner.authmodal{
        width: 500px;
        & .text{
            width: 100%;
            padding: 20px 0 40px 0;
            display: flex; flex-direction: column; align-items: center;
            & h1{
                font-size: 1.5em;
                margin-bottom: 10px;
                font-weight: 700;
            }
            & P{
                font-size: 1em;
            }
        }
        & form{
            width: 100%;
            background-color: white;
            border-radius: 20px;
            display: flex; align-items: center; flex-direction: column;
            & .alt{
                padding: 40px 0 40px 0;
                width: 80%;
                display: flex; justify-content: space-evenly;
                border-bottom: 2px solid #e2e2e2;
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
            & .mainform{
                width: 80%;
                padding: 20px 0;
                display: flex; flex-direction: column; align-items: center;
                & .outer{
                    &.email{
                        margin-bottom: 20px;
                    }
                    width: 100%;
                    display: flex; align-items: center; flex-direction: column;
                    & label{
                        display: none;
                    }
                    & input{
                        width: 90%;
                        box-sizing: border-box;
                        border-radius: 5px;
                        border: 2px solid #e2e2e2;
                        padding: 15px 10px;
                    }
                }
                & .submit{
                    width: 90%;
                    margin: 40px 0;
                    & button{
                        background-color: black;
                        border-radius: 5px;
                        color: white;
                        width: 100%;
                        padding: 20px 0px;
                    }
                }
            }
        }
    }
`