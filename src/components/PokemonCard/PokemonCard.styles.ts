import styled from "styled-components";
import "../../styleguide.css";

export const CardContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 11px rgba(0, 0, 0, 0.1);
  margin: 20px;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--primary);
`;

export const CardText = styled.h3`
  color: #555;
`;
