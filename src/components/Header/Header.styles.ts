import { Grid } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../styleguide.css";

export const HeaderContainer = styled(Grid)`
  background-color: var(--secondary);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.16);
`;

export const LogoImage = styled.img`
  width: 150px;
`;

export const ShoppingCardContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TotalContainer = styled.div`
  color: var(--primary);
  font-weight: bold;
`;
