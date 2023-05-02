import styled from "styled-components";

export let StyledFooter = styled.footer`
    background-color:#003333;
    color:#fff;
    padding:100px 0 60px 60px;

    
    ul li {
        list-style-type:none;
        margin-bottom:20px;
    }
    

    p{
        text-align:right;
    }

    @media(max-width : 768px){
        text-align:center;

        ul{
            padding:0;
        }

        p{
            text-align:center;
        }

    }

` 