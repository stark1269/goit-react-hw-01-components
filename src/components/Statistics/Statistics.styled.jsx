import styled from "styled-components";

export const Title = styled.h2`
font-size: 32px;
font-weight: 700;
color: ${p => p.theme.colors.grey};
`;

export const Container = styled.div`
background-color: ${p => p.theme.colors.white};
margin: 0 auto;
display: flex;
padding-top: 32px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
border: 1px solid ${p => p.theme.colors.black};
`;

export const List = styled.ul`
display: flex;
`;

export const Item = styled.li`
padding: 32px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
width: calc(100% / 5);
color: ${p => p.theme.colors.black};
background-color: ${item => getRandomHexColor()};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};