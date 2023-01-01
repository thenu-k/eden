import styled from "styled-components";

export const PermissionCheckContainer = styled.div`
    width: 100%;
    & .inner{
        width: fit-content;
        font-weight: 500;
        font-size: 1.2em;
        height: calc(100vh);
        margin-top: -60px;
        min-height: 500px;
        .loader {
            width: 48px;
            height: 48px;
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

    }
`