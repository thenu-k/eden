import styled from "styled-components";

export const SideMenuContainer = styled.div`
    width: 100%;
    & .outer{
        width: 100%;
        background-color: #ececec;
        border-radius: 10px;
        margin-bottom: 20px;

        &.new{
            padding: 10px 0;
            background-color: #131b62;
            & button{
                padding: 5px 0;
                width: 100%;
                background-color: inherit;
                color: white;
                font-weight: 500;
                cursor: pointer;
            }
        }
    }
`