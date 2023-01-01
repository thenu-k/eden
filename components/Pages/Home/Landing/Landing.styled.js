import styled from "styled-components";

export const LandingContainer = styled.section`
    width: 100%;
    min-height: calc(100vh - 60px);
    & .landing.inner{
        width: 85%;
        display: flex; align-items: center;
        flex-direction: row; justify-content: center;
        /* background-color: #F8F9FF; */
        & .text{
            /* padding: 100px 0px; */
            border-radius: 20px;
            width: 100%;
            margin: 0px 0;
            display: flex; flex-direction: column; align-items: center;
            transform: translateY(-60px);
            & h1{
                font-size: 4.5em;
                font-weight: 500;
                margin-bottom:50px;
                text-align: center;
                & span{
                    color: transparent;
                    background: linear-gradient(45deg, purple, blue);
                    background-clip: text;
                    -webkit-background-clip: text;
                }
            }
            & p{
                font-size: 1.3em;
                font-weight: 500;
                line-height: 1.5;
                margin-bottom: 40px;
                text-align: center;
            }
            & .links{
                display: flex;
                & a{
                    width: 200px;;
                    padding: 25px 0;
                    border-radius: 5px;
                    font-size: 1.2em;
                    color: white;
                    background-color: black;
                    font-weight: 500;
                    &.colored{
                        background: linear-gradient(45deg, purple, blue);
                        color: white;
                        margin-right: 30px;
                    }
                }
            }
        }
    }
`