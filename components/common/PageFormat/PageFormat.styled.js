import styled from "styled-components";

export const PageFormatContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    background-color: #F8F9FF;
    & #Header{
        position: fixed; top: 0; left: 0; z-index: 9000;
    }
    & .pageFormatInner {
        margin-top: 60px;
        width: 100%;
    }
`