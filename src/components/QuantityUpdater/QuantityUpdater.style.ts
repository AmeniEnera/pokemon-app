import { IconButton } from "@mui/material";
import styled from "styled-components";

export const AddRemoveContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddButton = styled(IconButton)`
  && {
    background: #d6180b;
    color: white;

    &:hover {
      background: #d6180b;
      opacity: 0.8;
    }
  }
`;

export const RemoveButton = styled(IconButton)`
  && {
    background-color: #2b3336;
    color: white;

    &:hover {
      background: #2b3336;
      opacity: 0.8;
    }
  }
`;

export const ItemQuantity = styled.div`
  border: 0.1rem solid #cfd8dc;
  padding: 10px;
  margin: 0 5px;
  border-radius: 0.4rem;
`;
