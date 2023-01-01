import styled from "styled-components";

export const NoteContainer = styled.div`
    width: 100%;
    & .inner.note{
        width: 85%;
        height: 100px;
        display: flex;
        flex-direction: column; align-items: center;
        & .editorBar{
            position: fixed;
            width: 85%;
            z-index: 999;
            top: 80px; 
            height: 80px;
            background-color: white;
            border-radius: 10px;
            & .inner.editorbar{
                height: 100%;
                display: flex; flex-direction: row; align-items: center;
                width: 95%;
                & button{
                    padding: 10px 30px;
                    border-radius: 5px;
                    color: white;
                    font-size: 1.1em; font-weight: 500;
                    background: linear-gradient(45deg, purple, blue);
                    cursor: pointer;
                }
            }
        }
        & .textEditor{
            width: 100%;
            margin-top: 120px;
            background-color: white;
            border-radius: 10px;
            display: flex; 
            flex-direction: column;
            align-items: center;
            & h1{
                width: 95%;
                margin: 40px 0 20px 0;
                font-size: 2em; font-weight: 500;
            }
            & >div{
                width: 100%;
            }
            & .ProseMirror{
                box-sizing: border-box;
                width: 100%;
                padding: 40px 2.5% 40px 2.5%;
                min-height: 400px;
                &:focus{
                    outline: 0;
                }

            }
        }
    }
`