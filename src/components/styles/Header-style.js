import styled from 'styled-components'

export let HeaderStyle  = styled.header`
    padding:10px 40px;
   

    background-color:${({theme})=> theme.bg};

`
export let Container = styled.div`
    padding:0 40p;

`
export let Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:40px;

    @media(max-width : 768px){
        flex-direction:column;
    }

`
export let Button = styled.button`
    border-radius:50px;
    border:none;
    box-shadow:0 0 10px rgba(0,0,0,0.15);
    cursor:pointer;
    font-size:16px;
    font-weight:700;
    padding:15px 60px;
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#333'};
    &:hover {
        opacity:0.9;
        transform:scale(0.98)
    }
`
export let Svg = styled.svg`
    @media(max-width : 768px){
        margin-bottom:40px;
    }


`
export let Image = styled.img`
width:375px;
margin-left:40px;
@media(max-width : 768px){
    margin:40px 0 30px;
}
`