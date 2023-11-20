import { Grid, IconButton, Typography } from "@mui/material";
import styled from "styled-components";

export const ItemContainer = styled(Grid)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ItemImage = styled.img`
  cursor: pointer;
  width: 200px;

  @media (max-width: 600px) {
    width: 150px;
  }
`;

export const ItemName = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--primary);
`;
