import { Grid } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../styleguide.css";

export const HeaderContainer = styled(Grid)`
  background-color: var(--secondary-background-color);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
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
  color: var(--primary-background-color);
  font-weight: bold;
`;
