import styled from "styled-components";

export const EdenContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: row; align-items: center;
    & .eden.inner{
        max-width: 1500px;
        margin-top: 120px; /* Menu bar position is fixed*/
        width: 85%;
        display: flex; align-items: center;
        flex-direction: column;
        position: relative;
        & .noteList{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 15px;
            grid-auto-columns: auto;
        }
    }
    @media all and (max-width: 1000px){
        & .eden.inner{
            & .noteList{
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
    @media all and (max-width: 700px){
        & .eden.inner{
            & .noteList{
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }
    @media all and (max-width: 500px){
        & .eden.inner{
            & .noteList{
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
`