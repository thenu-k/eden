import styled from "styled-components";

export const NoteTemplateContainer = styled.div`    
    width: 100%;
    background-color: white;
    border-radius: 10px;
    & .inner.noteTemplate{
        width: 100%;
        display: grid;
        grid-template: 1fr / 1fr 3fr 1fr;
        padding: 40px 0;
        & .com-1{
            justify-self: center;
            width: 90%;
            height: 100%;
            display: flex; flex-direction: column; align-items: flex-start; justify-content: center;
            & > *{
                width: 100%;;
                font-size: 1.1em;
            }
            & label{
                font-size: 0.8em;
                font-weight: 500;
                margin-bottom: 10px;
            }
            & span{
                display: inline-block;
                font-weight: 500;
            }
            & p{
                text-align: start;
            }
            & .iconContainer{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                & h5{
                    font-size: 1.1em;
                    font-weight: 500;
                    margin-left: 40px;
                }
            }
        }
    }
`