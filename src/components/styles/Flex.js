import styled from "styled-components";

export let Flex = styled.div`
    display:flex;
    align-items:center;
    & > div,
    & > ul {
        flex:1;
    }
    @media(max-width : 768px){
        flex-direction:column;
        text-align:center;
    }

`