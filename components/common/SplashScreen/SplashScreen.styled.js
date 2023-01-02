import styled from "styled-components";

export const SplashScreenContainet = styled.div`
    height: 100vh; width: 100vw;
    & h1{
        font-size: 3.5em;
        font-weight: 600;
        letter-spacing: 1px;
        /* color: transparent;
        background-color: #f3ec78;
        background-image: linear-gradient(45deg, purple, blue);
        background-size: 100%;
        background-clip: text; */
    }

    @media all and (max-width: 500px){
        /* & h1{
            transform: translateY(-50px);
        } */
        position: fixed;
        top: 0;
        bottom: 0;
        height: auto;
    }
`