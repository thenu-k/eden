import styled from "styled-components";

export const NothingHereContainer = styled.div`
        width: 100%;
        & .inner.nothinghere{
            margin-top: 100px;
            border-radius: 10px;
            display: flex; align-items: center; flex-direction: column;
            & .image{
                width: 350px; height:200px;
                background-image: url('/nothingHere.jpg');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;   
                border-radius: 10px 10px 0 0;           
            }
            & p{
                background-color: white;
                width: 100%;
                padding: 30px 0;
                font-weight: 500;
                border-radius: 0 0 10px 10px;
                border-top: 2px solid #e9e9e9;
            }
        }
`