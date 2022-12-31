import styled from "styled-components";

export const MenuBarContainer = styled.div`
    width: 85%;
    position: fixed;
    z-index: 99;
    top: 80px;
    background-color: white;
    border-radius: 10px;
    & .inner.menubar{
        width: 95%;
        height: auto;
        display: flex; 
        flex-direction: row;
        align-items: center;
        & .search.outer{
            margin: 20px 0;
            & input{
                height: 30px;
                width: 30vw;
                padding: 5px 20px ;
                border-radius: 5px;
                outline: 2px solid #e2e2e2;
                background-color: white;
                &:focus{
                    outline: 2px solid #c8c8c8;
                }
            }
        }
        & .controls.outer{
            margin-left: auto;
            & button{
                height: 40px;
                padding: 0 20px;
                background: linear-gradient(45deg, purple, blue);
                color: white;
                border-radius: 5px;
                font-weight: 500;
                cursor: pointer;
            }
        }
    }
    & #createModal{
        display: none;
        backdrop-filter: blur(0px);
        /* transition: backdrop-filter 5s ease-in-out; */
        position: fixed; z-index: 1000;
        top: 0; left: 0;
        height: 100vh; min-height: 550px;
        background-color: transparent;
        width: 100vw;
        &.on{
            display: flex;
            animation-name: blurIn;
            animation-duration: 500ms; animation-fill-mode: forwards; animation-iteration-count: 1;
            animation-timing-function: linear;
            & .inner{
                opacity: 1;
                animation-name: appearIn;
                animation-duration: 250ms; animation-fill-mode: forwards; animation-iteration-count: 1;
                animation-timing-function: ease-out;
            }
        }
        @keyframes blurIn {
            from{
                backdrop-filter: blur(0px);
            }
            to{
                backdrop-filter: blur(2px);
            }
        }
        @keyframes appearIn {
            from{
                opacity: 0;
                transform: translateY(calc(100%));
            }
            to{
                opacity: 1;
                transform: translateY(0);
            }
        }
        & .inner{
            width: 40%;
            background-color: white;
            min-width: 500px;
            border-radius: 10px;
            transform: translateX(calc(-100%));
            display: flex; flex-direction: column; align-items: center;
            & .title{
                margin: 40px 0;
                width: 90%;
                display: flex;
                align-items: center;
                & .icon{
                    margin-right: 20px;
                }
                & h3{
                    font-size: 1.5em;
                    font-weight: 500;
                }
            }
            & form{
                margin-bottom: 40px;
                width: 90%;
                display: flex; flex-direction: column;
                & input{
                    width: 100%;
                    box-sizing: border-box;
                    border: 2px solid #e2e2e2;
                    border-radius: 5px;
                    height: 50px;
                    padding: 10px 20px;
                    margin-bottom: 20px;
                }
                & button{
                    margin-top: 20px;
                    width: 30%;
                    padding: 20px;
                    border-radius: 5px;
                    background: linear-gradient(45deg,purple,blue);
                    color: white;
                    font-weight: 500;
                    cursor: pointer;
                    font-size: 1.1em;
                }
            }
        }
    }
`