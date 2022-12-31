import styled from "styled-components";

export const EdenContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: row; align-items: center;
    & .eden.inner{
        margin-top: 120px; /* Menu bar position is fixed*/
        width: 85%;
        display: flex; align-items: center;
        flex-direction: column;
        position: relative;
        & .noteList{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`