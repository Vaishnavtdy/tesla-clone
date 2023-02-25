import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
position: absolute;
top: 0;
left: 0;
right: 0;
justify-content: space-between;
/* width: 100%; */
padding: 20px 50px;
`
export const LogoWrapper = styled.div`
padding-top: 10px;
img{
    width: 120px;
}
`
export const MenuItemsWrapper = styled.div`
display: flex;
gap: 10px;
span{
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    :hover{
    background-color: rgba(0,0,0,0.1);
}
@media only screen and (max-width:1200px){
    display: none;
}
}

`
export const ProfileWrapper = styled.div`
display: flex;
gap: 10px;
span{
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    :hover{
    background-color: rgba(0,0,0,0.1);
}
@media only screen and (max-width:1200px){
    display: none;
}
}
`