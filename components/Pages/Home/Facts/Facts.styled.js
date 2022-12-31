import styled from "styled-components";

export const FactsContainer = styled.div`
    margin: 40px 0 100px 0;;
    width: 80%;
    background-color: white;
    border-radius: 20px;
    & .inner{
        width: 95%;
        margin: 40px 0;
        display: grid;
        grid-template: 1fr 1fr/  1fr 1fr 1fr;
        & .factElement{
            justify-self: center;
            padding: 30px 0;
            width: 90%;
            height: 100%;
            display: flex;
            align-items: center;
            & .iconContainer{
                margin-right: 40px;
            }
            & p {
                flex-grow: 1;
                font-size: 1em;
                font-weight: 500;
                text-align: center;
                font-size: 1em;
            }
        }
    }
`