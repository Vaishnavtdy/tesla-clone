import styled from "styled-components";

export const HomeContainer = styled.div`
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 95vh;

`
export const ImageContainer = styled.div`
position: relative;
img{
  width: 100%;
  height: 95vh;
  object-fit: cover;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}`
export const TopItems = styled.div`
position: absolute;
display: flex;
flex-direction: column;
top: 5%;
width: 100%;
align-items: center;
`
export const BottomItems = styled.div`
position: absolute;
display: flex;
bottom: 5%;
width: 100%;
justify-content: center;

column-gap: 20px;
`
export const Button = styled.button`
background-color: ${(props) => props?.primary ? "rgba(23, 26, 32, 0.8)" : "rgba(244, 244, 244, 0.65)"};
color: ${(props) => props?.primary ? "#fff" : "#000000"};
padding: 10px 30px;
border: none;
:hover{
  background-color: ${(props) => props?.primary ? "rgba(244, 244, 244, 0.65)" : "rgba(23, 26, 32, 0.8)"}; 
color: ${(props) => props?.primary ? "#000000" : "#fff"};
}
`