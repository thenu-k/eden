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
        & .menuIcon{display:none}
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
        & nav.normal{
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
    &> .sideMenu{
        display: none;
    }
    @media all and (max-width: 600px){
        &> .sideMenu{
            display: flex;
            position: fixed;
            z-index: 9999;
            right: -100%;
            width: 100vw;
            height: auto; top: 0; bottom: 0;
            transition: right 100ms ease-in-out;
            &.on{
                right: 0;
            }
            display: flex; flex-direction: row; 
            & .sideMenu.inner{
                background-color: #F8F9FF;
                width: 250px;
                height: 100%;
            }
            & .transparent{
                height: 100%;
                flex-grow: 1;
                opacity: 0;
                backdrop-filter: blur(1px);
                transition: opacity 100ms ease-in-out;
            }
            &.on .transparent{
                opacity: 1;
            }
        }
        & nav{
            display: none;
        }
        & .header.inner{
            justify-content: space-between;
            & h1 a{
                padding: 0 10px;
            }
            & .menuIcon{
                display: flex;
                cursor: pointer;
            }
        }
    }
`