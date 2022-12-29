import styled from "styled-components";

export const FiltersContainer = styled.div`
    width: 90%;
    & .filters.inner{
        width: 100%;
        display: flex; flex-direction: column;
        margin: 20px 0;
    }
    & select{
        margin: 5px 0;
        width: 100%;
        border: 1px solid black;
        text-align: center;
        padding: 5px 0;
        border-radius: 3px;
        cursor: pointer;
    }
`