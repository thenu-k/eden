import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    & .inner{
        width: 90%;
        display: flex; align-items: center;  flex-direction: column;
        & .text{
            margin: 75px 0;
            width: 60%; min-width: 300px;
            display: flex; flex-direction: column; align-items: center;
            & h2{
                width: clamp(200px, 100%, 800px);
                font-size: 4em;
                font-weight: 500;
                letter-spacing: 1px;
                text-align: center;
                & p{
                    all: inherit;
                    display: inline;
                    color: transparent;
                    background-color: #f3ec78;
                    background-image: linear-gradient(45deg, purple, blue);
                    background-size: 100%;
                    background-clip: text;
                }
            }
            & .links.outer{
                width: 100%;
                display: flex; flex-direction: row; justify-content: center;
                & a{
                    width: 200px;
                    color: white;
                    padding: 20px 0;
                    border-radius: 10px;
                    font-size: 1.2em;
                    font-weight: 500;
                    background: linear-gradient(45deg, purple, blue);
                    margin: 0 20px;
                    &.none{
                        background: unset;
                        background-color: black;
                        color: white;
                    }
                    cursor: pointer;
                    &:hover{
                        opacity: 0.8;
                    }
                }
            }
            & .intro.outer{
                margin: 40px 0 50px 0;
                width: 100%;
                & p{
                    width: 100%;
                    text-align: center;
                    font-size: 1.3em;
                }
            }
        }
    }
`