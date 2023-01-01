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
                    width: 80px;
                    height: 40px;
                    border-radius: 5px;
                    color: white;
                    font-weight: 500;
                    background: linear-gradient(45deg, purple, blue);
                    cursor: pointer;
                    &.back{
                        background:black;
                    }
                }
                & .controls{
                    height: 100%;
                    flex-grow: 1;
                    display: flex; align-items: center;
                    & button{
                        &:first-of-type{
                            margin-left: 60px;
                        }
                        width: 40px;
                        margin-right: 20px;
                        background: none;
                        background-color: white;
                        color: black;
                        display: flex; align-items: center; justify-content: center;
                        cursor: pointer;
                        box-shadow: 0px 0px 3px #929292;
                        &.is-active{
                            background-color: black;
                            color: white;
                        }
                    }
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
                    outline: none;
                }
                *{
                    font-size: 1.1em;
                }

                > * + * {
                margin-top: 20px;
                }
                p{
                    font-size: 1.2em;
                    strong {
                    font-size: 1.05em;
                }
                }
                ul,
                ol {
                padding: 0 1rem;
                }
            
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                line-height: 1.1;
                }

                h3{
                    font-size: 1.5em;
                    line-height: 1.3;
                    padding: 10px 0;
                }
            
                code {
                background-color: rgba(#616161, 0.1);
                color: #616161;
                }
            
                pre {
                background: #0D0D0D;
                color: #FFF;
                font-family: 'JetBrainsMono', monospace;
                padding: 0.75rem 1rem;
                border-radius: 0.5rem;
            
                code {
                    color: inherit;
                    padding: 0;
                    background: none;
                    font-size: 0.8rem;
                }
                }
            
                img {
                max-width: 100%;
                height: auto;
                }
            
                blockquote {
                padding-left: 1rem;
                border-left: 2px solid rgba(#0D0D0D, 0.1);
                }
            
                hr {
                border: none;
                border-top: 2px solid rgba(#0D0D0D, 0.1);
                margin: 2rem 0;
                }
                strong {
                    font-weight: 500;
                }
                ul{
                    list-style-type: circle;
                }

            }
        }
    }
`