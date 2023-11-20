import { Grid } from "@mui/material";
import styled from "styled-components";

export const TotalContainer = styled(Grid)`
  display: flex;
  justify-content: end;

  @media (max-width: 600px) {
    display: block;
  }
`;
