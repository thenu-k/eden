import styled from "styled-components";

export const MiniLoaderContainer = styled.div`
    position: fixed;
    bottom: 40px;
    height: 50px; width: 50px;
    border-radius: 5px;
    background-color: white;
    .loader {
            width: 30px;
            height: 30px;
            border: 4px solid #1966FF;;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
            }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

`