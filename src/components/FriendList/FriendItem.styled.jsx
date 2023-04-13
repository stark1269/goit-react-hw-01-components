import styled from "styled-components";

export const Item = styled.li`
display: flex;
justify-content: start;
align-items: center;
gap: 12px;
padding: 24px;
width: 220px;
background-color: ${p => p.theme.colors.white};
box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const Status = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${p => p.online? "green" : "red"};
`;

export const Text = styled.p`
font-size: 18px;
font-weight: 500;
color: ${p => p.online? p.theme.colors.black : p.theme.colors.grey};
`;