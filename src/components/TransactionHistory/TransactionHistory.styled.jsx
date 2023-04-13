import styled from "styled-components";

export const Table = styled.table`
width: 100%;
text-align: center;
box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const Head = styled.thead`
background-color: blue;
color: ${p => p.theme.colors.white};
text-transform: uppercase;
`;

export const Th = styled.th`
padding: 12px;
`;

export const Td = styled.td`
padding: 12px;
color: ${p => p.theme.colors.black};
`;

export const Tr = styled.tr`
:nth-child(2n) {
background-color: ${p => p.theme.colors.grey};
}
`;