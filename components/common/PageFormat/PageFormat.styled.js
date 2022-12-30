import styled from "styled-components";

export const PageFormatContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #F8F9FF;
    & #Header{
        position: fixed; top: 0; left: 0; z-index: 9999;
    }
    & .pageFormatInner {
        margin-top: 60px;
        padding-top: 10px;
        width: 100%;
    }
`