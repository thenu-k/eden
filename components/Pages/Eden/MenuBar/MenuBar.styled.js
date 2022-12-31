import styled from "styled-components";

export const MenuBarContainer = styled.div`
    width: 85%;
    position: fixed;
    z-index: 999;
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
`