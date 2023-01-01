import styled from "styled-components";

export const AuthModalContainer = styled.div`
    width: 100%;
    /* Remove this  */
    margin-bottom: 100px;
    & .inner.authmodal{
        width: 500px;
        & .text{
            width: 100%;
            padding: 40px 0 25px 0;
            display: flex; flex-direction: column; align-items: center;
            & h1{
                letter-spacing: 1px;
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
                padding: 60px 0 0px 0;
                width: 75%;
                display: flex; justify-content: space-between;
                & button{
                    border-radius: 10px; 
                    padding: 25px 30px;
                    background-color: #f8f8f8;
                    color: black;
                    cursor: pointer;
                    &:hover{
                        background-color: #e8e8e8;
                    }
                }
            }
            & .mainform{
                width: 75%;
                padding: 40px 0 20px 0;
                display: flex; flex-direction: column; align-items: center;
                & .outer{
                    &.email, &.username, &.errorMessage{
                        margin-bottom: 20px;
                    }
                    &.errorMessage{
                        color: red;
                        font-weight: 500;
                    }
                    width: 100%;
                    display: flex; align-items: center; flex-direction: column;
                    & label{
                        display: none;
                    }
                    & input{
                        width: 100%;
                        box-sizing: border-box;
                        border-radius: 5px;
                        border: 2px solid #e2e2e2;
                        padding: 15px 10px;
                    }
                }
                & .submit{
                    width: 100%;
                    margin: 40px 0;
                    & button{
                        background: linear-gradient(45deg, purple, blue);
                        border-radius: 5px;
                        color: white;
                        width: 100%;
                        padding: 20px 0px;
                        cursor: pointer;
                        &:hover{
                            background: linear-gradient(45deg,#3f003f,#000072)
                        }
                    }
                }
            }
        }
    }
    @media all and (max-width: 600px){
        background-color: #F8F9FF;
        & .inner.authmodal{
            width: 100%;
            & form{
                background-color: #F8F9FF;
                box-shadow: unset;
                & .alt{
                    padding: 20px 0 0 0;
                    width: 70%;
                    & button{
                        padding: 5vw 6vw;
                    }
                }
                & .mainform{
                    width: 70%;
                    & .submit button{
                        border-radius: 10px;
                    }
                }
            }
        }
    }
    @media all and (max-width: 600px){
        & .inner.authmodal{
            & form{
                & .alt{
                    width: 80%;
                    & button{
                        border-radius: 10px;
                    }
                }
                & .mainform{
                    width: 80%;
                }
            }
        }
    }
`