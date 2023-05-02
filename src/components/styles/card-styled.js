import styled from "styled-components";

export let StyledCard = styled.div`
    display:flex;
    flex-direction:${({layout}) => layout || 'row'};
    align-items:center;
    background-color:#fff;
    border-radius:15px;
    box-shadow:0 0 10px rgba(0,0,0,0.15);
    margin:40px 40px;
    padding : 60px;

    img{
        width:80%
    } 
    & > div {
        flex:1;
    }

    @media(max-width : 768px){
        flex-direction:column;
    }
`