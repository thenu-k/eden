import styled from "styled-components";

export const NoteTemplateContainer = styled.div`    
    width: 100%;
    height: fit-content;
    background-color: transparent;
    align-self: flex-start;
    border-radius: 10px;
    & .inner.noteTemplate{
        border-radius: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 20px 20px;
        background-color: white;
        box-sizing: border-box;
        cursor: pointer;
        &:hover{
            background-color: #f8f8f8;
        }
        & .com-1{
            width: 100%;
            height: 100%;
            &:not(:last-of-type){
                margin-bottom: 20px;
            }
            display: flex; flex-direction: row; justify-content: flex-start;
            & h5{
                font-size: 1.2em;
                font-weight: 500;
                color: black;
            }
            & p{
                font-size: 0.9em;
                font-weight: 500;
                color: black;
            }
        }
    }
`