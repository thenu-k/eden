import styled from "styled-components";

export const TagsContainer = styled.div`
    width: 90%;
    padding: 20px 0;
    & ul{
        width: 100%;
        display: flex; flex-direction: row; justify-content: space-evenly;
        flex-wrap: wrap;
        & li{
            & button{
                margin: 5px 0;
                width: 110px;
                padding: 2px 5px;
                border-radius: 3px;
                color: white;
                box-sizing: border-box;
                background-color: gray;
            }
        }
    }
`