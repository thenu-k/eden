import styled from "styled-components";

export const PermissionCheckContainer = styled.div`
    width: 100%;
    margin-top: -60px;
    position: fixed; z-index: 99;
    height: auto;
    top: 0; bottom: 0;
    & .inner{
        width: fit-content;
        font-weight: 500;
        font-size: 1.2em;
        height: 100%;
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