import styled from "styled-components";

export const AuthModalContainer = styled.div`
    width: 100%;
    & .inner.register{
        width: 500px;
        & .text{
            width: 100%;
            padding: 20px 0 40px 0;
            display: flex; flex-direction: column; align-items: center;
            & h1{
                font-size: 1.7em;
                margin-bottom: 10px;
                font-weight: 600;
            }
        }
        & form{
            width: 100%;
            height: 300px;
            background-color: white;
            border-radius: 20px;
            display: flex; align-items: center; flex-direction: column;
            & .altRegister{
                width: 80%;
            }
        }
    }
`