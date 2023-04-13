import styled from "styled-components";

export const Container = styled.div`
background-color: ${p => p.theme.colors.white};
margin: 0 auto;
padding-top: 32px;
display: flex;
flex-direction: column;
gap: 48px;
width: 300px;
border: 1px solid ${p => p.theme.colors.grey};
border-radius: 12px;
`;

export const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
`;

export const Image = styled.img`
width: 100px;
border: 1px solid ${p => p.theme.colors.black};
border-radius: 50%;
`;

export const Name = styled.p`
font-size: 24px;
font-weight: 600;
`;

export const Info = styled.p`
font-size: 18px;
color: ${p => p.theme.colors.grey};
`;

export const List = styled.ul`
display: flex;
justify-content: space-around;
background-color: aliceblue;
border-radius: 12px;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
padding: 18px;
width: 100%;
border-right: 1px solid ${p => p.theme.colors.grey};
border-top: 1px solid ${p => p.theme.colors.grey};

:last-child {
  border-right: none;
}
`;