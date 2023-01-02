import styled from "styled-components";

export const LandingContainer = styled.section`
    width: 100%;
    /* min-height: max(calc(100vh), 500px); */
    position: fixed;
    z-index: 99;
    height: auto;
    top: 0; bottom: 0;
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
            & h1{
                font-size: 3.5em;
                font-weight: 500;
                margin-bottom:40px;
                text-align: center;
                & span{
                    color: transparent;
                    background: linear-gradient(45deg,purple,blue);
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
                & .centerButtons{
                    width: 150px;;
                    padding: 20px 0;
                    border-radius: 10px;
                    font-size: 1em;
                    color: black;
                    background-color: #E7E7E7;
                    font-weight: 500;
                    cursor: pointer;
                    &.colored{
                        background: linear-gradient(45deg,purple,blue);
                        color: white;
                        margin-right: 30px;
                    }
                    &:hover{
                        opacity: 0.8;
                    }
                }
            }
        }
    }

    @media all and (max-width: 1000px){
        & .landing.inner{
            & .text{
                & h1{
                    font-size: 3em;
                }
                & .links{
                    & a{
                        width: 125px;
                        padding: 15px 0;
                        font-size: 1em;
                    }
                }
            }
        }
    }
    @media all and (max-width: 600px){

        & .landing.inner{
            & .text{
                align-items: center;
                & h1{
                    width: 100%;
                    text-align: center;
                    font-size: 2.3em;
                    margin-bottom:30px;
                }
                & .links{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 100%;;
                    & .centerButtons{
                        width: 100px !important;
                        font-size: 0.8em;
                        &:first-of-type{
                            margin-right: 10px !important;
                        }
                        width: 60%;
                        padding: 15px 0;
                        font-weight: 500;
                    }
                }
            }
        }
    }
`