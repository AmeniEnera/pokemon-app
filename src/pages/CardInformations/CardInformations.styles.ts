import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 100%;
  padding: 20px;
`;

export const Image = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    margin-right: 40px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

export const Info = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }
`;

export const AttacksTable = styled.table`
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export const StyledButton = styled(Button)`
  height: 40px;

  && {
    background-color: #dc0c0c;

    &:hover {
      background-color: #dc0c0c;
      opacity: 0.8;
    }
  }
`;
