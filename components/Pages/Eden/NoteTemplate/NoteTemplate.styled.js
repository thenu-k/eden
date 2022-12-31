import styled from "styled-components";

export const NoteTemplateContainer = styled.div`    
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 20px;
    & .inner.noteTemplate{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 40px 0;
        & .com-1{
            border-radius: 5px;
            width: 90%;
            height: 100%;
            background-color: #f8f8f8;
            &:not(:last-of-type){
                margin-bottom: 20px;
            }
            & h5{
                width: 100%;
                font-size: 1.2em;
                font-weight: 500;
                color: black;
                padding: 20px 0;
            }
            & p{
                font-size: 0.9em;
                font-weight: 500;
                color: black;
                width: 90%;
                padding: 30px 0;
            }
        }
    }
`