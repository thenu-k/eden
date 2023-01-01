import styled from "styled-components";

export const PermissionCheckContainer = styled.div`
    width: 100%;
    & .inner{
        width: fit-content;
        margin-top: 100px;
        font-weight: 500;
        font-size: 1.2em;
        .gooey {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 142px;
            height: 40px;
            margin: -20px 0 0 -71px;
            background: #F8F9FF;
            filter: contrast(20);
            box-shadow: 0px 0px 3px #808080;
            border-radius: 10px;
            }
            .gooey .dot {
            position: absolute;
            width: 16px;
            height: 16px;
            top: 12px;
            left: 15px;
            filter: blur(4px);
            background: #000;
            border-radius: 50%;
            transform: translateX(0);
            animation: dot 2.8s infinite;
            }
            .gooey .dots {
            transform: translateX(0);
            margin-top: 12px;
            margin-left: 31px;
            animation: dots 2.8s infinite;
            }
            .gooey .dots span {
            display: block;
            float: left;
            width: 16px;
            height: 16px;
            margin-left: 16px;
            filter: blur(4px);
            background: #000;
            border-radius: 50%;
            }
            @-moz-keyframes dot {
            50% {
                transform: translateX(96px);
            }
            }
            @-webkit-keyframes dot {
            50% {
                transform: translateX(96px);
            }
            }
            @-o-keyframes dot {
            50% {
                transform: translateX(96px);
            }
            }
            @keyframes dot {
            50% {
                transform: translateX(96px);
            }
            }
            @-moz-keyframes dots {
            50% {
                transform: translateX(-31px);
            }
            }
            @-webkit-keyframes dots {
            50% {
                transform: translateX(-31px);
            }
            }
            @-o-keyframes dots {
            50% {
                transform: translateX(-31px);
            }
            }
            @keyframes dots {
            50% {
                transform: translateX(-31px);
            }
            }

    }
`