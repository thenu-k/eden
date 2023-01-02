import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    background-color: #F8F9FF;
    & a{
        color: black;
        display: flex; justify-content: center; align-items: center;
    }
    & .header.inner{
        width: 85%;
        height: 100%;
        display: flex; flex-direction: row; align-items: center;
        & h1{
            height: 100%;
            & a{
                height: 100%;
                padding-right: 20px;
                font-size: 1.5em;
                font-weight: 700;
                letter-spacing: 1px;
            }
        }
        & nav{
            height: 100%;
            margin-left: auto;
            & ul{
                display: flex; flex-direction: row;
                height: 100%;
                & li{
                    height: 100%;
                    display: flex; justify-content: center; align-items: center;
                    & a, & button{
                        height: 100%;
                        padding: 0px 20px;
                        cursor: pointer;
                        background-color: unset;
                        &:hover{
                            background-color: #ececec;
                        }
                    }
                    & .blue{
                        height: unset;
                        margin-left:20px;
                        padding: 8px 15px;
                        color: white;
                        background: linear-gradient(45deg,purple,blue);;
                        border-radius: 10px;
                        &:hover{
                            background-color: #1966FF;
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }
`